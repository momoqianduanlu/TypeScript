// 1. public public指定成员是可见的，无论是在类的内部还是外部，在 TypeScript 里，成员默认为 public
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
/*
class Animal {
  public name: string
  public constructor (name: string) {
    this.name = name
  }

  public move (distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`)
  }
}
*/
// 2. private 当成员被标记成 private 时，它就不能在声明它的类的外部访问，也不能通过子类来调用
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " moved " + distance);
    };
    return Animal;
}());
// let animal = new Animal('cat')
// animal.name // 错误 name 是私有的
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, 'Rhino') || this;
    }
    Rhino.prototype.aaa = function () {
        console.log(111);
    };
    return Rhino;
}(Animal));
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    return Employee;
}());
var animal = new Animal('Goat');
var rhino = new Rhino();
rhino.move();
rhino.aaa();
var employee = new Employee('Bob');
// // animal = rhino
// // animal = employee // 错误: Animal 与 Employee 不兼容
// // 3. protected 不能在声明他的类的外部访问，但是他可以在子类中访问
// class Person {
//   protected name: string
//   protected constructor (name: string) {
//     this.name = name
//   }
// }
// class Employees extends Person {
//   private department: string
//   constructor (name: string, department: string) {
//     super(name)
//     this.department = department
//   }
//   getElevatorPitch() {
//     return `Hello, my name is ${this.name} and I work in ${this.department}.`
//   }
// }
// let howard = new Employees('Howard', 'Sales')
// console.log(howard.getElevatorPitch())
// // console.log(howard.name) // error
// // let john = new Person('John') // 错误: 'Person' 的构造函数是被保护的.
// // 4. readonly readonly 关键字将属性设置为只读的，只读属性必须在声明时或构造函数里被初始化
// class Persons {
//   readonly name: string
//   constructor (name: string) {
//     this.name = name
//   }
// }
// let john = new Persons('John')
// john.name = 'peter'
