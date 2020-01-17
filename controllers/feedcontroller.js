const appState = require('../appstate.js')
const { renderPageWithData } = require('../render.js')
const { GroupUserFeedComponent } = require("../view/groupuserfeedcomponent.js")
const { TestComponent } = require("../view/testcomponent.js")

const component = new GroupUserFeedComponent(appState.dummyGroup);
const component2 = new TestComponent("test2");

function get(req, res) {
    return renderPageWithData(res, {
        pageTitle: "Feed",
        includePage: "feed",
        includeData: {
            feedItems: [
                component,
                component2
            ]
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

module.exports = {
    get: get,
    post: post
}