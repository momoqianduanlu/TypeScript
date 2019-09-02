// 交叉类型是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。

function extend<T, U> (first: T, second: U): T & U {
  // first 和 second 分别是两个对象，我们用泛型来表示，T & U 就是交叉类型
  let result = {} as T & U
  
  for (let id in first) {
    result[id] = first[id] as any
  }

  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      result[id] = second[id] as any
    }
  }
  return result
}

class Person {
  name: string
  constructor (name) {

  }
}

interface Loggable {
  log(): void
}

class ConsoleLoggable implements Loggable {
  log () {
    console.log('Sabo')
  }
}

var jim = extend(new Person('Sabo'), new ConsoleLoggable())
jim.name
jim.log()
