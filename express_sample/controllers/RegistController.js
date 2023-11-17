// Userモデル
const User = require('../models/User')

//入力画面
exports.add = async (req, res) => {
    //TODO:

    //DB登録
    var user = new User();
    await user.add(req.body)

    if (user.id) {
        res.redirect('/login')
    } else {
        res.redirect('/regist')
    }
}