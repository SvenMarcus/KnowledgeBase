const appState = require('../appstate.js');
const { renderPageWithData } = require('../render.js')

function get(req, res) {
    return renderPageWithData(res, {
        pageTitle: "Meine Gruppen",
        includePage: "grouplist",
        includeData: {
            groups: appState.currentUser.groups
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