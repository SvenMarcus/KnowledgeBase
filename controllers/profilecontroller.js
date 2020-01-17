const { renderPageWithData } = require('../render.js')

function get(req, res) {
    return renderPageWithData(res, {
        pageTitle: "Profil",
        includePage: "profile",
        includeData: {}
    })
}

function post(req, res) {

}

module.exports = {
    get: get,
    post: post
}