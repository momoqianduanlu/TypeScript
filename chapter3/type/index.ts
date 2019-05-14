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
