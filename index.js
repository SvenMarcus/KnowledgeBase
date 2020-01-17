const express = require('express')
const path = require('path')
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
app.get('/topic/create/:path', (req, res) => createTopicController.get(req, res));
app.post('/topic/create/:path', (req, res) => createTopicController.post(req, res));

app.get('/profile', (req, res) => res.sendFile(path.join(__dirname, "static/profile.html")))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
