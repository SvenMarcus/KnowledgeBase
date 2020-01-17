const appState = require('../appstate.js')
const { renderPageWithData } = require('../render.js')

function get(req, res) {
    let group = appState.groupRepository.getGroupById(req.params.groupId);
    console.log(group)
    return renderPageWithData(res, {
        pageTitle: group.topicName,
        includePage: "group",
        includeData: {
            group: group
        }
    })
}

function post(req, res) {
    res.send("TODO");
}

module.exports = {
    get: get,
    post: post
}