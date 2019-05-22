function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
var p1 = { x: 10, y: 20 };
// p1.x = 5 // Error
var a = [1, 2, 3, 4];
// 定义一个泛型只读数组
var ro = a;
ro[0] = 12;
