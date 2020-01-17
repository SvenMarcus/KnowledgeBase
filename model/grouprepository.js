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

    getGroupsByTopic(topicName) {
        return GROUPS.filter(group => group.topicName.toLowerCase() == topicName.toLowerCase());
    }
}

module.exports = { GroupRepository: GroupRepository }