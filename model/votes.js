class DateSuggestionVote {
    constructor(group, suggestedDate) {
        this.group = group;
        this.suggestedDate = suggestedDate;
        this.options = ["Yes", "No"];
        this.votes = new Map();
        this.open = true;
    }

    accept(user) {
        if (!this.open)
            return;
        this.votes.set(user, 0);
    }

    reject(user) {
        if (!this.open)
            return;
        this.votes.set(user, 0);
    }

    close() {
        this.open = false;
    }

    _setGroupDateIfVotingComplete() {
        if (!this.open)
            return;

        for (const user of this.votes.keys())
            if (!(this.group.members.has(user) || this.group.experts.has(user)))
                return;

        this.group.nextDate = this.suggestedDate;
        this.close();
    }
}