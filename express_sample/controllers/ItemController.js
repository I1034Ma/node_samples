// models/item.js を読み込む
const item = require('../models/item')

// 商品一覧
exports.index = (req, res) => {
    var data = {
        title: "商品一覧",
        items: item.get(),
    }
    // views/iem/index.jes にデータを探して表示
    res.render('item/index', data)
}

// 商品詳細
exports.detail = (req, res) => {
    const id =req.params.id
    // TODO: 
    // TODO: 
    var selectItem = item.find(id)
    var data = {
        title: "商品詳細",
        items: selectItem
    }
    res.render('Item/detail', data)
}
