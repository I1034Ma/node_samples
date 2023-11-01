//express モジュールの読み込み
const express = require('express')
//Routerオブジェクトを生成
const router = express.Router()

//HomeControllerモジュールの読み込み
const HomeController = require('./controllers/HomeController')
const ItemController = require('./controllers/ItemController')
const LoginController = require('./controllers/LoginController')
const UserController = require('./controllers/UserController')

//HomeControllerモジュールの読み込み
router.get('/', HomeController.index)
router.get('/profile', HomeController.profile)

// Item
router.get('/', ItemController.index)
router.get('/item/;id', ItemController.detail)

// Login
router.get('/login', LoginController.index)
router.get('/auth', LoginController.auth)

//User
router.get('/user', UserController.index)

//モジュール化
module.exports = router