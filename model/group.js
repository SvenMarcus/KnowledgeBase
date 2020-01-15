const uniqid = require('uniqid');

class Group {
    constructor(topicName) {
        this.id = uniqid();
        this.topicName = topicName;
        this.members = new Set();
        this.experts = new Set();
        this.dateSuggestions = new Set();
        this.nextDate = null;
        this.eventLog = new Array();
    }

    addMember(user) {
        if (this.members.has(user))
            return;

        this.members.add(user);
        this.eventLog.push({
            "title": "New User",
            "content": "${user.firstName} ${user.lastName} has joined the group."
        });
    }

    addExpert(user) {
        if (this.experts.has(user))
            return;

        this.experts.add(user);
        this.eventLog.push({
            "title": "New Expert",
            "content": "${user.firstName} ${user.lastName} has joined the group as an Expert."
        });
    }
}

module.exports = { Group: Group }