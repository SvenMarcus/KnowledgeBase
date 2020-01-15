const ejs = require('ejs');

class GroupUserFeedComponent {

    constructor(group) {
        this.group = group;
        this.joinGroupFormHtml = null;
        ejs.renderFile("static/joingroupform.ejs", { group: this.group }, (err, str) => {
            if (err) console.error(err);
            this.joinGroupFormHtml = str;
        });
    }

    render() {
        return `
        <div>
            <p class="title">Gruppenvorschlag für ${this.group.topicName}</p>
            <p class="subtitle">Möchtest du dieser Gruppe beitreten?</p>
        ` + 
        this.renderMembers() +
        this.joinGroupFormHtml +
        '</div>';
    }

    renderMembers() {
        var members = '<div class="columns">';
        for (const member of this.group.members) {
            members += '<div class="column is-2">' + member.fullName() + '</div>';
        }
        members += '</div>';

        return members;
    }
}

module.exports = {
    GroupUserFeedComponent: GroupUserFeedComponent
};