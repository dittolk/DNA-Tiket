const router = require('express').Router()
const {userController} = require('../controllers')
const { verifyToken } = require('../middleware/auth')

router.post('/register-user', userController.registerUser) //register user
router.get('/user-login', userController.userLogin) //login user
router.get('/keep-login', verifyToken, userController.keepLogin) //keep login butuh verify token

module.exports = router