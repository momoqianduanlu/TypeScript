// class Greeter {
//   greeting: string
//   constructor (message: string) {
//     this.greeting = message
//   }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//   greet () {
//     return 'Hello, ' + this.greeting
//   }
// }
// let greeter = new Greeter('world')
// console.log(greeter.greet())
// class Animal {
//   move (distance: number = 0) {
//     console.log(`animal moved ${distance}m`)
//   }
// }
// class Dog extends Animal {
//   bark () {
//     console.log('woof! woof!')
//   }
// }
// const dog = new Dog()
// dog.bark()
// dog.move(10)
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " moved " + distance + "m");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log('Slithering...');
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distance) {
        if (distance === void 0) { distance = 45; }
        console.log('Galloping...');
        _super.prototype.move.call(this, distance);
    };
    return Horse;
}(Animal));
var sam = new Snake('Sammy');
// 我们可以把 tom 指定为 Animal 类型，他虽然是一个 Animal 类型呢，但是他实例出来的是 Horse 的子类，
var tom = new Horse('Tommy');
sam.move();
tom.move(34);
