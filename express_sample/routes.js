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
    //res.send('Hello')
    //テンプレートの表示(レンダリング)
    res.render('index')
    
})

// プロフィールページの追加
router.get('/profile', (req, res) => {
    // red.send
    //res.send('Profile')

    var user = {
        id :1,
        name : 'MZN',
        birthplace: '横浜',
        hobby: [ガンプラ, ゲーム,鉄道旅],
    }
    var data = {
        title: 'プロフィール',
        user: user,
    }
    //
    res.render('plofile', data)
})

// 商品一覧
router.get('/item', (req, res) => {
    var data = {
        title: "商品一覧",
        items: item.get(),
    }
    res.render('item/index', data)
})

// /item/ xxx のルーティング (パスパラメータ)
router.get('/item/:id', (req, res) =>{
    const id = req.params.id
    //TODO: case1 
    //TODO: case2 
    // IDで商品データを取得
    var selectItem = item.find(id)
    var data = {
        item: selectItem,
    }
    res.send('item/detail', data)
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