class DateSuggestion {
    constructor(date, group) {
        this.date = date;
        this.group = group;
        this.approvingUsers = new Set();
    }

    approve(user) {
        this.approvingUsers.add(user);
    }

    reject(user) {
        this.approvingUsers.delete(user);
    }

}