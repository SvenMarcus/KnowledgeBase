const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const {
    User
} = require('./model/user.js')
const {
    Group
} = require("./model/group.js")
const {
    GroupUserFeedComponent
} = require("./view/groupuserfeedcomponent.js")
const {
    TestComponent
} = require("./view/testcomponent.js")

const dummyGroup = new Group("Technische Mechanik");
const defaultUser = new User("Franz", "Schubert");
const defaultUser2 = new User("Herbert", "Müller");
const defaultUser3 = new User("Jupp", "Dietrich");

defaultUser.joinGroup(dummyGroup);
defaultUser2.joinGroup(dummyGroup);
defaultUser3.joinGroup(dummyGroup);

const component = new GroupUserFeedComponent(dummyGroup);
const component2 = new TestComponent("test2");

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => res.render(path.join(__dirname, "static/index"), {
    pageTitle: "Feed",
    includePage: "feed",
    includeData: {
        feedItems: [
            component,
            component2
        ]
    }
}));

app.get('/feed', (req, res) => res.render(path.join(__dirname, "static/feed"), {
    feedItems: [
        component
    ]
}));

app.get('/profile', (req, res) => res.sendFile(path.join(__dirname, "static/profile.html")))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))