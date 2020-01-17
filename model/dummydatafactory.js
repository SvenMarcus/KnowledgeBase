const appState = require('../appstate.js');
const { User } = require('./user.js');
const { Group } = require('./group.js');

const FIRST_NAMES = [
    "Mia",
    "Emma",
    "Anna",
    "Lena",
    "Ben",
    "Leon",
    "Luka",
    "Philipp",
    "Oskar"
];

const LAST_NAMES = [
    "Müller",
    "Schmidt",
    "Schneider",
    "Fischer",
    "Meyer",
    "Weber",
    "Schulz",
    "Becker",
    "Koch",
    "Richter",
    "Wolf",
    "Neumann"
];


module.exports.makeGroupForTopic = function(topicName, maxMembers) {
    let group = new Group(topicName);

    for (let i = 0; i < maxMembers - 1; i++) {
        let firstNameIndex = getRndInteger(0, FIRST_NAMES.length);
        let lastNameIndex = getRndInteger(0, LAST_NAMES.length);
        let firstName = FIRST_NAMES[firstNameIndex];
        let lastName = LAST_NAMES[lastNameIndex];
        let user = new User(firstName, lastName);
        user.joinGroup(group);
        appState.userRepositroy.add(user);
    }

    return group;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}