const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const feedController = require('./controllers/feedcontroller.js');
app.get('/', (req, res) => feedController.get(req, res));
app.post('/', (req, res) => feedController.post(req, res));

const groupController = require('./controllers/groupcontroller.js');
app.get('/groups/:groupId', (req, res) => groupController.get(req, res));

const createTopicController = require('./controllers/createtopiccontroller.js');
app.get('/topic/create', (req, res) => createTopicController.get(req, res));
app.get('/topic/create/:path', (req, res) => createTopicController.get(req, res));
app.post('/topic/create/:path', (req, res) => createTopicController.post(req, res));

const profileController = require('./controllers/profilecontroller.js');
app.get('/profile', (req, res) => profileController.get(req, res));

const { renderPageWithData } = require('./render.js');
app.get('/vision', (req, res) => renderPageWithData(res, {
    pageTitle: "Vision",
    includePage: "vision",
    includeData: {}
}));

const grouplistController = require('./controllers/grouplistcontroller.js');
app.get('/user/groups', (req, res) => grouplistController.get(req, res));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
