const uniqid = require('uniqid');

class User {
    constructor(firstName, lastName) {
        this.id = uniqid();
        this.firstName = firstName;
        this.lastName = lastName;
        this.groups = new Set();
        this.topics = new Set();
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }

    joinGroup(group) {
        this.groups.add(group);
        group.members.add(this);
    }

    joinGroupAsExpert(group) {
        this.groups.add(group);
        group.experts.add(this);
    }

    leaveGroup(group) {
        this.groups.delete(group);
        group.members.delete(this);
        group.experts.delete(this);
    }
}

module.exports = { User: User }