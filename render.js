const path = require('path');

module.exports.renderPageWithData = function (res, pageData) {
    return res.render(path.join(__dirname, "static/index"), pageData)
}

