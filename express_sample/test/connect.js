// mysql2モジュール読み込み
const mysql = require('mysql2')
// lib/dbモジュールの読み込み
const db = require('../lib/db')

// dbモジュールの info を代入して MYSQL 接続の作成
const con = mysql.createConnection(db.info);
//MYSQL接続
con.connect((error) => {
    if (error) {
        console.log('DB connect error...');
    }
    else {
        console.log('DB connect success')
    }
});
// MYSQL接続完了
con.end();