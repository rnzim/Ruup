const express = require('express')
const router = express.Router()
const HomeController = require('../src/Controllers/HomeController')
const UserController = require('../src/Controllers/UserController')
const WithdrawController = require('../src/Controllers/WithdrawController')
const Auth = require('../src/Middlewares/Auth')
router.get('/',HomeController.index)

router.post('/user',UserController.login)
router.post('/register',UserController.register)
router.get('/withdraw',Auth,WithdrawController.viewWithdraw)
module.exports = router