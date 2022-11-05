const Model = require('../models/data.model')

// json data show
const jsonData = async (req, res) => {
    try {
        const allData = await Model.find()
        res.send(allData)
    } catch (error) {
        res.send(error)
    }
}


// Show Send Data Form
const sendDataForm = (req, res) => {
    res.render('sendForm')
}

// Send Data
const sendData = async (req, res) => {

    try{
        const newData = new Model({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            phone : req.body.phone
        })
        await newData.save()
        res.redirect('/')
    } catch (err) {
        res.status(400).send("Data didn't send to database")
    }
}


// Update form show and insert data in prefill
const updateForm = async (req, res) => {

    try{

        const data = await Model.findById(req.params.id)
        res.render('updateForm', {
            data : data
        })

    } catch (err) {
        res.send(err)
    }

}


// Update Data
const updateData = async (req, res) => {

    try{

        await Model.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/')

    }catch (err) {
        res.send('Do not Update', err)
    }

}


// Delete Data
const deleteData = async (req, res) => {
    
    try {

        await Model.findByIdAndDelete(req.params.id)
        res.redirect('/')
        
    } catch (error) {
        res.send("data did't delete", error)
    }

}   


module.exports = { jsonData, sendDataForm, sendData, updateData, updateForm, deleteData }