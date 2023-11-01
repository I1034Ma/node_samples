// Modelモジュールの読み込み
const Model = require('./model')

//MOdelクラスの継承
class User extends Model {
    dataFile = "./data/users.json"

    /**
     * 認証用のメソッド
     * @param string email
     * @param string password
     * @returns array
     */


    auth = (email, password) => {
        //
        return this.get().find((value) => 
        (value.email == email && value.password == password)
        );
    }
}

//モジュール化
module.exports = User