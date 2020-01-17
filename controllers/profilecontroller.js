const appState = require('../appstate.js');
const { renderPageWithData } = require('../render.js')

function get(req, res) {
    return renderPageWithData(res, {
        pageTitle: "Profil",
        includePage: "profile",
        includeData: {
            topics: appState.currentUser.topics
        }
    })
}

function post(req, res) {

}

module.exports = {
    get: get,
    post: post
}