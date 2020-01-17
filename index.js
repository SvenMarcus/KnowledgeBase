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

const { Topic } = require("./model/Topic");

const {
    TestComponent
} = require("./view/testcomponent.js")

const appState = require('./appstate.js');

const component = new GroupUserFeedComponent(appState.dummyGroup);
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
        let group = appState.groupRepository.getGroupById(req.body.JOIN);
        if (!group) return;

        appState.currentUser.joinGroup(group);
        res.redirect('/groups/' + req.body.JOIN);
    }
});

app.get('/groups/:groupId', (req, res) => {
    let group = appState.groupRepository.getGroupById(req.params.groupId);
    console.log(group)
    return renderPageWithData(res, {
        pageTitle: group.topicName,
        includePage: "group",
        includeData: {
            group: group
        }
    })
});

app.get('/topic/create/:path', (req, res) => {
    if (req.params.path != "goal" && req.params.path != "expert") {
        res.status(404).send("Page not found");
        return;
    }

    let title = req.params.path == "goal" ? "Interesse" : "Fähigkeit";
    renderPageWithData(res, {
        pageTitle: "${title} anlegen",
        includePage: "createTopic",
        includeData: {}
    })
});

app.get('/profile', (req, res) => res.sendFile(path.join(__dirname, "static/profile.html")))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function renderPageWithData(res, pageData) {
    return res.render(path.join(__dirname, "static/index"), pageData)
}
