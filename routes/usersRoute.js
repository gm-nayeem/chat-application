// external imports
const router = require('express').Router()

// internal imports
const {usersGetController} = require('../controllers/usersController')

// user page
router.get('/', usersGetController)


module.exports = router