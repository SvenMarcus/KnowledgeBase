const { GroupRepository } = require("./model/grouprepository.js");
const { UserRepository } = require('./model/userrepository.js')
const { User } = require('./model/user.js')
const { Group } = require("./model/group.js")
const { Topic } = require("./model/topic.js");

const appState = {
    groupRepository: new GroupRepository(),
    userRepositroy: new UserRepository(),
    currentUser: new User("Frontend", "Fabian"),
    dummyGroup: null,
    setAppState: function () {
        this.dummyGroup = new Group("Thermodynamik");
        console.log(this.dummyGroup.id);
        this.groupRepository.add(this.dummyGroup);
        const defaultUser = new User("Franz", "Schubert");
        const defaultUser2 = new User("Herbert", "Müller");
        const defaultUser3 = new User("Jupp", "Dietrich");

        const expertUser = new User("Prof. Dr. Dr. Hermann", "Schlaukopf");
        const expertTopic = new Topic("Thermodynamik");
        expertTopic.expertLevel = 5;
        expertTopic.teaching = true;
        expertUser.topics.add(expertTopic);

        this.userRepositroy.add(defaultUser);
        this.userRepositroy.add(defaultUser2);
        this.userRepositroy.add(defaultUser3);

        defaultUser.joinGroup(this.dummyGroup);
        defaultUser2.joinGroup(this.dummyGroup);
        defaultUser3.joinGroup(this.dummyGroup);
    }
}

appState.setAppState();

module.exports = appState;