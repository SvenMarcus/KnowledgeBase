const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const ejs = require('ejs')
const { User } = require('./model/user.js')

const defaultUser = new User("Franz", "Schubert")

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => res.render(path.join(__dirname, "static/index"), { user: defaultUser }))
app.get('/profile', (req, res) => res.render(path.join(__dirname, "static/profile"), {}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))