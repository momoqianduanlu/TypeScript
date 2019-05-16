// 1.布尔值
let isDone: boolean = true

// 2.数字
let decLiteral: number = 20
let hexLiteral: number = 0x14 //  十六进制
let binaryLiteral: number = 0b10100 // 二进制
let octalLiteral: number = 0o24 // 八进制

// 3.字符串
let firstName: string = 'GuoSheng'
firstName = 'Teng'

// 4.数组
let list1: number[] = [1, 2, 3] // 表示数字类型的数组

// let list2: Array<number> = [1, 2, 3] // 数组泛型的方式

// 5.元组
let x: [string, number]

x = ['hello', 10]

// x = [10, 'hello']

console.log(x[0].substr(1))

// 6.枚举 枚举类型呢是 javascript 标准数据类型的补充，
enum Color {  // 注意首字母大写
  Red = 1,
  Green = 3,
  Blue = 5
}

let c:Color = Color.Green

console.log(c)

let colorName:string = Color[1]

console.log(colorName)


// 7. any 一旦用了 any 类型的话，typescript 就不做类型检查了
let notSure: any = 4

notSure = 'This is string message'

notSure = false

let list: any[] = [1, true, 'free'] // 定义一个 any 类型的数组

list[1] = 100

// 8. void 某种程度上可以理解成他与 any 是相反的，他表示没有任何类型
function warnUser(): void {
  console.log('This i my warning message')
}

let unUser: void = undefined // void 可以赋值成 null 和 undefined

// 9. null 和 undefied
let num: number | null = 5

num = null

// 10. never 表示那些永不存在的值的类型
function error(message: string): never {
  throw Error(message)
}

function fail() {
  return error('error message')
}

function inifiniteLoop(): never {
  while(true) {

  }
}

// 11. object
declare function create(o: object | null): void;

create({prop: 0})
create(null)

// create('string')
// create(2)
// create(false)
// create(undefined)

// 12. 类型断言
let someValue: any = 'This is a string'
// let strLength: number = (<string>someValue).length
let strLength: number = (someValue as string).length
 