// 1. public public指定成员是可见的，无论是在类的内部还是外部，在 TypeScript 里，成员默认为 public

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


// 2. private 当成员被标记成 private 时，它就不能在声明它的类的外部访问，也不能通过子类来调用(不能在子类中访问)

class Animal {
  private name: string
  constructor (name: string) {
    this.name = name
  }

  move (distance: number = 0) {
    console.log(`${this.name} moved ${distance}`)
  }
}

// let animal = new Animal('cat')
// animal.name // 错误 name 是私有的

class Rhino extends Animal {
  constructor () {
    super('Rhino')
  }

  // move 方法中不能访问父类中 private: name
  move () {
    // return this.name
  }
}

class Employee {
  private name: string
  constructor (name: string) {
    this.name = name
  }
}

let animal = new Animal('Goat')
let rhino = new Rhino()
let employee = new Employee('Bob')

// animal = rhino
// animal = employee // 错误: Animal 与 Employee 不兼容


// 3. protected 不能在声明他的类的外部访问，但是他可以在子类中访问

class Person {
  protected name: string
  protected constructor (name: string) {
    this.name = name
  }
}

class Employees extends Person {
  private department: string
  constructor (name: string, department: string) {
    super(name)
    this.department = department
  }

  getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`
  }
}

let howard = new Employees('Howard', 'Sales')
console.log(howard.getElevatorPitch())
// console.log(howard.name) // error

// let john = new Person('John') // 错误: 'Person' 的构造函数是被保护的.


// 4. readonly readonly 关键字将属性设置为只读的，只读属性必须在声明时或构造函数里被初始化

class Persons {
  readonly name: string
  constructor (name: string) {
    this.name = name
  }
}

let john = new Persons('John')
john.name = 'peter'
