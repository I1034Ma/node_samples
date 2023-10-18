// express モジュール読み込み
const express = require('express')
// dotenv モジュール読み込み
const dotenv = require('dotenv')
// router モジュール読み込み
const routes = require('./routes')

// dotenv の設定の読み込み
dotenv.config()
const HOST = process.env.HOST
const POST = process.env.POST

console.log(HOST)
console.log(POST)

// サーバーの作成
const app = express()

// ミドルウェアの設定
app.use(express.static(__dirname + '/public'))

// URLエンコード
app.use(express.urlencoded({extended: true }))

// EJSをテンプレートエンジンとして設定
app.set('view engine', 'ejs')

// ルーティングの有効化
app.use(routes)



// サーバー待機(Listen)
app.listen(POST,HOST, () => {
    console.log(HOST) // ローカルホスト3000番台で待機中
    console.log(POST) // ローカルホスト3000番台をURLに入力すると
    console.log('wait...')// GETリクエスト処理が行われる
    // サーバーの停止は Control + C で停止
    // express_sampleのファイルを開きたい場合は code ./ または code express_sample
})
