const { renderPageWithData } = require('../render.js')

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
    res.send("TODO");
}

module.exports = {
    get: get,
    post: post
}