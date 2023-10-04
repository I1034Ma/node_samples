//  モジュール化
exports.show = function(items) {
    items.froEach(item => {
        console.log(item)
    });
}