const Model = require('../models/data.model')
const axios = require('axios')

const home = (req, res) => {

    axios.get("http://localhost:3000/json")
    .then((response) => {
        res.render('home', {
            data : response.data
        })
    })
}


module.exports = home