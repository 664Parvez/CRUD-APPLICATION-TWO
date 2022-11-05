const router = require('express').Router()
const { jsonData, sendDataForm, sendData, updateData, updateForm, deleteData } = require('../controllers/data.controller')

router.get('/json', jsonData)

router.get('/user', sendDataForm)
router.post('/user', sendData)

router.get('/update/:id', updateForm)
router.post('/update/:id', updateData)

router.get('/delete/:id', deleteData)

module.exports = router