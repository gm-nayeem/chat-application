// external imports
const router = require('express').Router()

// internal imports
const {inboxGetController} = require('../controllers/inboxController')


router.get('/', inboxGetController)


module.exports = router