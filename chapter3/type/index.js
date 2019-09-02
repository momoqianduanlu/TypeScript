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
var list2 = [1, 2, 3]; // 数组泛型的方式
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
// 枚举使用 enum 关键字来定义：
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
// 7. any 一旦用了 any 类型的话，typescript 就不做类型检查了
var notSure = 4;
notSure = 'This is string message';
notSure = false;
var list = [1, true, 'free']; // 定义一个 any 类型的数组
list[1] = 100;
// 7-1. 未声明类型的变量
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
var something;
something = 'seven';
something = 7;
something.setName('Tom');
// 等价于
// let something: any
// something = 'seven'
// something = 7
// something.setName('Tom')
// 8. void 某种程度上可以理解成他与 any 是相反的，他表示没有任何类型
function warnUser() {
    console.log('This i my warning message');
}
var unUser = undefined; // void 可以赋值成 null 和 undefined
// 9. null 和 undefied
var num = 5;
num = null;
// 10. never 表示那些永不存在的值的类型
function error(message) {
    throw Error(message);
}
function fail() {
    return error('error message');
}
function inifiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 });
// create(null)
// create('string')
// create(2)
// create(false)
// create(undefined)
// 12. 类型断言
var someValue = 'This is a string';
// let strLength: number = (<string>someValue).length
var strLength = someValue.length;
