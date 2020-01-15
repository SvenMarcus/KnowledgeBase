const ejs = require('ejs');

class GroupUserFeedComponent {

    constructor(group) {
        this.group = group;
    }

    render() {
        var htmlString = "";
        ejs.renderFile("static/groupuserfeedcomponent.ejs", { group: this.group }, (err, str) => {
            if (err) console.error(err);
            htmlString = str;
        });
        return htmlString;
    }
}

module.exports = {
    GroupUserFeedComponent: GroupUserFeedComponent
};