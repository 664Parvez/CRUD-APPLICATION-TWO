require('./db/connect')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const dataRoute = require('./routes/data')
const home = require('./controllers/home.controller')


app.set('view engine', "ejs")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))


app.get('/', home)

app.use(dataRoute)

app.use((req, res) => {
    res.send("Page is not found")
})

module.exports = app