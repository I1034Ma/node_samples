// model モジュールを読み込む
const Model = require('./model')

//Modelクラスの継承
class Item extends Model {
    dataFile = "./data/items.json"
    
}