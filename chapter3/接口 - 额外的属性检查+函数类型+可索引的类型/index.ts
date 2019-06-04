interface Square {
  color: string,
  area: number
}

interface SquareConfig {
  color?: string,
  width?: number,
  [propName: string]: any // 添加字符串索引签名 类型是 string 值是 any
}

function createSquare(config: SquareConfig): Square {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare = createSquare({ colour: 'black' })

/**
 * 额外的属性检查
 * 对象字面量会被 ts 特殊对待会经过额外的属性检查，绕开这些检查的办法有很多
 * 1.let mySquare = createSquare({ colour: 'black' } as SquareConfig)
 * 2.[propName: string]: any
 */


interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc

mySearch = function(source: string, subString: string): boolean {
  let result = source.search(subString)
  return result > -1
}

/**
 * 除了描述带有属性的普通对象外，接口也可以描述函数类型。
 */


interface StringArray {
  [x: number]: string // 表示一个索引签名，当使用一个 number 去索引这个 StringArray 的时候呢，他会得到一个 string 类型的返回值
}

let myArray: StringArray

myArray = ['Bob', 'Fred']

let myStr:string = myArray[0]


class Animal {
  name: string
}

class Dog extends Animal {
  breed: string
}

interface NotOkay {
  // [x: number]: Animal
  // [x: string]: Dog
  [x: number]: Dog
  [x: string]: Animal
}


interface NumberDictionary {
  [index: string]: number
  length: number
  // name: string  // 返回的类型与 number 不匹配
}


interface ReadonlyStringArray {
  readonly [index: number]: string
}

let myArrayed: ReadonlyStringArray = ['Alice', 'Bob']

// myArrayed[2] = 'Mallory'  // Error

/**
 * TypeScript 支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
 */