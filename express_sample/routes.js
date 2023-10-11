//express モジュールの読み込み
const express = require('express')
//Routerオブジェクトを生成
const router = express.Router()

// GETリクエスト処理
router.get('/', (req, res) => {
    // リクエスト処理
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    // レスポンス処理
    res.send('Hello')
    
})

// プロフィールページの追加
router.get('/profile', (req, res) => {
    //
    res.send('Profile Page')
})

// POSTリクエスト
router.post('/auth', (req, res) => {
    var loginName = req.body.login_name
    var password = req.body.password

    console.log(loginName, password)
    
    var message = "ログイン失敗"
    //.env で設定した値(LOGIN_NAMEとPASSWORD)でログインチェック
    //TODO: データベースに接続してユーザー取得
    //TODO: パスワードはハッシュ値でチェック
    if (loginName == process.env.LOGIN_NAME 
        && password == process.env.PASSWORD) {
        message = "ログインに成功しました"
        //TODO: ログインが成功したらユーザーの状態を保存
        //TODO: ログイン後のページの移動
    }
    else{
        //TODO: ログイン画面に戻す
    }
    //res.send('認証処理')
})

//モジュール化
module.exports = router