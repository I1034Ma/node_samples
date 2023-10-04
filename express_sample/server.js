// express モジュール読み込み
const express = require('express')
// dotenv モジュール読み込み
const dotenv = require('dotenv')

// dotenv の設定の読み込み
dotenv.config()
const HOST = process.env.HOST
const POST = process.env.POST

console.log(HOST)
console.log(POST)

// サーバーの作成
const app = express()

// GETリクエスト処理
app.get('/', (req, res) => {
    // リクエスト処理
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    // レスポンス処理
    res.send('Hello')
    
})

// サーバー待機(Listen)
app.listen(POST,HOST, () => {
    console.log(HOST) // ローカルホスト3000番台で待機中
    console.log(POST) // ローカルホスト3000番台をURLに入力すると
    console.log('wait...')// GETリクエスト処理が行われる
})
