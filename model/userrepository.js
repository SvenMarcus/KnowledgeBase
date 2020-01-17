let USERS = new Array();

class UserRepository {
    add(user) {
        USERS.push(user);
    }

    remove(user) {
        let index = USERS.indexOf(user);
        USERS.splice(index, 1);
    }

    getAllGroups() {
        return USERS.values();
    }

    getGroupById(userId) {
        return USERS.find((value) => value.id == userId);
    }
}

module.exports = { UserRepository: UserRepository }