class Topic {
    constructor(name) {
        this.name = name;
        this.goalLevel = 0;
        this.expertLevel = 0;
        this.teaching = false;
        this.acceptGroups = false;
        this.maxGroupSize = 1;
    }
}

module.exports = { Topic: Topic }