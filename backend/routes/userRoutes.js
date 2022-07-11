const express = require('express')
const router = express.Router()
const { 
 registerUserController,
 loginUserController,
 userDataController
} = require('../controllers/userControllers')
const { protect } = require('../middleware/authMiddleware')


// user login
router.post('/login', loginUserController)

// user register
router.post('/', registerUserController)

// get user data
router.get('/getMe', protect ,userDataController)


module.exports = router