let USERS = new Array();

class UserRepository {
    add(user) {
        USERS.push(user);
    }

    remove(user) {
        let index = USERS.indexOf(user);
        USERS.splice(index, 1);
    }

    getAllUsers() {
        return USERS.values();
    }

    getUserById(userId) {
        return USERS.find((value) => value.id == userId);
    }

    findExpertForTopic(topicName, minLevel) {
        return USERS.find(expert => {
            expert.topics.filter(topic => {
                topic.topicName == topicName &&
                    topic.isTeaching &&
                    topic.expertLevel >= minLevel
            });
        });
    }

    findUsersWithInterest(topicName, level) {
        return USERS.find(user => {
            user.topics.filter(topic => {
                topic.topicName == topicName &&
                    topic.goalLevel == level
            });
        });
    }
}

module.exports = { UserRepository: UserRepository }