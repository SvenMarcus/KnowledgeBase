class Group {
    constructor(topicName) {
        this.topicName = topicName;
        this.members = new Set();
        this.experts = new Set();
        this.dateSuggestions = new Set();
        this.nextDate = null;
    }

    join(user) {
        this.members.add(user);
    }

    leave(user) {
        this.members.delete(user);
    }
}