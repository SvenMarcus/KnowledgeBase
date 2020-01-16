const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 3000

const { GroupRepository } = require("./model/grouprepository.js");

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

const groupRepository = new GroupRepository();

const dummyGroup = new Group("Technische Mechanik");
console.log(dummyGroup.id);
groupRepository.add(dummyGroup);

const currentUser = new User("Frontend", "Fabian");

const defaultUser = new User("Franz", "Schubert");
const defaultUser2 = new User("Herbert", "Müller");
const defaultUser3 = new User("Jupp", "Dietrich");

defaultUser.joinGroup(dummyGroup);
defaultUser2.joinGroup(dummyGroup);
defaultUser3.joinGroup(dummyGroup);

const component = new GroupUserFeedComponent(dummyGroup);
const component2 = new TestComponent("test2");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => renderPageWithData(res, {
    pageTitle: "Feed",
    includePage: "feed",
    includeData: {
        feedItems: [
            component,
            component2
        ]
    }
}));

app.post('/', (req, res) => {
    if (req.body.JOIN) {
        let group = groupRepository.getGroupById(req.body.JOIN);
        if(!group) return;

        currentUser.joinGroup(group);
        res.redirect('/groups/' + req.body.JOIN);
    }
});

app.get('/groups/:groupId', (req, res) => {
    let group = groupRepository.getGroupById(req.params.groupId);
    console.log(group)
    return renderPageWithData(res, {
        pageTitle: group.topicName,
        includePage: "group",
        includeData: {
            group: group
        }
    })
});

app.get('/feed', (req, res) => res.render(path.join(__dirname, "static/feed"), {
    feedItems: [
        component
    ]
}));

app.get('/profile', (req, res) => res.sendFile(path.join(__dirname, "static/profile.html")))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function renderPageWithData(res, pageData) {
    return res.render(path.join(__dirname, "static/index"), pageData)
}
