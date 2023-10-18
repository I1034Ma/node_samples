// fs モジュールを読み込む
const fs = require('fs') 

// data/items.jsonのパスの設定
exports.filePath = "./data/items.json"

// すべてのデータを取得
exports.get = () => {
    // 外部ファイルの読み込み
    var json = fs.readFileSync(this.filePath)
    // JSON データをパース(オブジェクトに変換)
    var values = JSON.parse(json);

    return values;
}

// IDを指定してデータを取得するメソッド
exports.find = (id) => {
    var values = this.get();
    // valuesを繰り返し、もしIDが指定された物と一致したら返す
    return values.find((value) => value.id == id);
}