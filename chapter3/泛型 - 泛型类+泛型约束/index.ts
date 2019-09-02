// 泛型类

class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}

let stringNumberic = new GenericNumber<string>()
stringNumberic.zeroValue = ''
stringNumberic.add = function (x, y) {
  return x + y
}

console.log(stringNumberic.add(stringNumberic.zeroValue, 'test'))

// 泛型约束

interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise> (arg: T): T {
  console.log(arg.length)
  return arg
}

loggingIdentity({length: 3})

// 在写代码中，可以利用keyof对对象中的属性是否存在做出限定，即只能使用对象中的属性名，这里相当于对 K 做了泛型约束
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let x = {a: 1, b: 2, c: 3, d: 4, e: 5}

getProperty(x, 'z')
