let GROUPS = new Array();

class GroupRepository {
    add(group) {
        GROUPS.push(group);
    }

    remove(group) {
        let index = GROUPS.indexOf(group);
        GROUPS.splice(index, 1);
    }

    getAllGroups() {
        return GROUPS.values();
    }

    getGroupById(groupId) {
        return GROUPS.find((value) => value.id == groupId);
    }
}

module.exports = { GroupRepository: GroupRepository }