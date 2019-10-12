// class Greeter {
//   greeting: string
//   constructor (message: string) {
//     this.greeting = message
//   }
  
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



class Animal {
  name: string
  constructor (name: string) {
    this.name = name
  }

  move (distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`)
  }
}

class Snake extends Animal {
  constructor (name: string) {
    super(name)
  }

  move (distance: number = 5) {
    console.log('Slithering...')
    super.move(distance)
  }
}

class Horse extends Animal {
  constructor (name: string) {
    super(name)
  }
  
  move (distance: number = 45) {
    console.log('Galloping...')
    super.move(distance)
  }
}

let sam = new Snake('Sammy')
// 我们可以把 tom 指定为 Animal 类型，他虽然是一个 Animal 类型呢，但是他实例出来的是 Horse 的子类，
let tom = new Horse('Tommy')

sam.move()
tom.move(34)
