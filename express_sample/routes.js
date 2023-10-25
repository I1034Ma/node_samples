//express モジュールの読み込み
const express = require('express')
//Routerオブジェクトを生成
const router = express.Router()

//HomeControllerモジュールの読み込み
const HomeController = require('./controllers/HomeController')
const ItemController = require('./controller/ItemController')
const LoginController = require('./controller/LoginController')

//HomeControllerモジュールの読み込み
router.get('/', HomeController.index)
router.get('/profile', HomeController.profile)

// Item取得
router.get('/', ItemController.index)
router.get('/item/;id', ItemController.detail)

// Login
router.get('/login', LoginController.index)
router.get('/auth', LoginController.auth)

// GETリクエスト処理
router.get('/', (req, res) => {
    // リクエスト処理
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    // レスポンス処理
    //res.send('Hello')
    //テンプレートの表示(レンダリング)
    res.render('index')
    
})



//モジュール化
module.exports = router