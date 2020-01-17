const appState = require('../appstate.js')
const { renderPageWithData } = require('../render.js')

const { makeComponentFor } = require('../view/componentfactory.js');
// const { GroupUserFeedComponent } = require("../view/groupuserfeedcomponent.js")
// const { TestComponent } = require("../view/testcomponent.js")

// const component = new GroupUserFeedComponent(appState.dummyGroup);
// const component2 = new TestComponent("test2");

function get(req, res) {
    return renderPageWithData(res, {
        pageTitle: "Feed",
        includePage: "feed",
        includeData: {
            feedItems: collectFeedData(req)
        }
    })
}

function post(req, res) {
    if (req.body.JOIN) {
        let group = appState.groupRepository.getGroupById(req.body.JOIN);
        if (!group) return;

        appState.currentUser.joinGroup(group);
        res.redirect('/groups/' + req.body.JOIN);
    }
}

function collectFeedData(req) {
    let components = new Array();
    const currentUser = appState.currentUser;
    for (const topic of currentUser.topics) {
        if (hasGroupForTopic(currentUser, topic)) break;

        let groupsByTopic = appState.groupRepository.getGroupsByTopic(topic.name);
        if (groupsByTopic.length > 0)
            components.push(makeComponentFor(groupsByTopic[0]));
    }

    return components;
}

module.exports = {
    get: get,
    post: post
}

function hasGroupForTopic(currentUser, topic) {
    return Array.from(currentUser.groups).filter(group => group.topicName == topic.name).length > 0;
}
