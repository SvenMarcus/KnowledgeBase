const appState = require('../appstate.js');
const { renderPageWithData } = require('../render.js');
const { Topic } = require('../model/topic.js');

const { makeGroupForTopic } = require('../model/dummydatafactory.js');

function get(req, res) {
    if (req.params.path != "goal" && req.params.path != "expert") {
        res.status(404).send("Page not found");
        return;
    }

    let title = req.params.path == "goal" ? "Interesse" : "Fähigkeit";
    return renderPageWithData(res, {
        pageTitle: title + " anlegen",
        includePage: "createTopic",
        includeData: {}
    })
}

function post(req, res) {
    if (!req.body.submitTopic)
        return res.redirect('/topic/create/' + req.params.path);

    let user = appState.currentUser;
    user.topics.add(createTopic(req));

    createDummyGroupForTopic(req);

    console.log(user);
    return res.redirect('/profile');
}

function createDummyGroupForTopic(req) {
    let group = makeGroupForTopic(req.body.topicName, req.body.maxGroupSize);
    appState.groupRepository.add(group);
}

function determineMaxLevel(req) {
    let maxLevel = 0;
    for (let level = 1; level <= 5; level++) {
        if (req.body["levelRadio" + level] != 'on')
            break;
        maxLevel++;
    }

    console.log("Skill level is " + maxLevel);
    return maxLevel;
}

function createTopic(req) {
    let topicName = req.body.topicName;
    let topic = new Topic(topicName);
    topic.maxGroupSize = req.body.maxGroupSize;

    const maxLevel = determineMaxLevel(req);
    if (req.params.path == "goal")
        topic.goalLevel = maxLevel;
    else if (req.params.path == "expert") {
        topic.expertLevel = maxLevel;
        topic.teaching = true;
    }

    return topic;
}

module.exports = {
    get: get,
    post: post
}