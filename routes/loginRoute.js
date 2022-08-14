// external imports
const router = require('express').Router()

// internal imports
const {loginGetController} = require('../controllers/loginController')


router.get('/', loginGetController)


module.exports = router