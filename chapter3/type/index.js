// 1.布尔值
var isDone = true;
// 2.数字
var decLiteral = 20;
var hexLiteral = 0x14; //  十六进制
var binaryLiteral = 20; // 二进制
var octalLiteral = 20; // 八进制
// 3.字符串
var firstName = 'GuoSheng';
firstName = 'Teng';
// 4.数组
var list1 = [1, 2, 3]; // 表示数字类型的数组
// let list2: Array<number> = [1, 2, 3] // 数组泛型的方式
// 5.元组
var x;
x = ['hello', 10];
// x = [10, 'hello']
console.log(x[0].substr(1));
// 6.枚举 枚举类型呢是 javascript 标准数据类型的补充，
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var colorName = Color[1];
console.log(colorName);
// 7. any 一旦用了 any 类型的话，typescript 就不做类型检查了
var notSure = 4;
notSure = 'This is string message';
notSure = false;
var list = [1, true, 'free']; // 定义一个 any 类型的数组
list[1] = 100;
// 8. void 某种程度上可以理解成他与 any 是相反的，他表示没有任何类型
function warnUser() {
    console.log('This i my warning message');
}
var unUser = undefined; // void 可以赋值成 null 和 undefined
// 9. null 和 undefied
var num = 5;
num = null;
