class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.groups = new Array();
        this.goals = new Array();
        this.offers = new Array();
    }
}

module.exports = { User: User }