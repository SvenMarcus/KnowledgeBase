const { Group } = require('../model/group.js');
const { GroupUserFeedComponent } = require('./groupuserfeedcomponent.js');

module.exports.makeComponentFor = function (obj) {
    if (obj instanceof Group)
        return new GroupUserFeedComponent(obj);
    return null;
}