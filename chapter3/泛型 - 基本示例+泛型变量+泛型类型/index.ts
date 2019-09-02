// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

// 1. 使用 any 类型会导致这个函数可以接收任何类型的 arg 参数，但是如果内部我们对 arg 做修改也是可以返回的，但是传入的类型就和返回的类型不一致了

function identity (arg: any): any {
  return arg + ''
}

// 2. 泛型变量
function identity2<T>(arg: T): T {
  arg + 'hello'
  return arg
}

let output1 = identity2<string>('myString')
let output2 = identity2('myString')

// 3. 使用泛型变量
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

// 4. 泛型类型和泛型接口

/**
 * 泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，
 * 
 * 1. 函数类型包含两部分：参数类型和返回值类型。 当写出完整函数类型的时候，这两部分都是需要的。(x: number, y: number) => number
 * 2. <T>(arg: T) => T
 */

function identity3<T>(arg: T): T {
  return arg
}

let myIdentity: <T>(arg: T) => T = identity3

// 第一个泛型接口
interface genericIndentifyFn1 {
  <T>(arg: T): T
}

// 我们可以把类型参数拿出来当做接口的参数，我们可以拿出来，拿出来有什么好处呢？其他的成员也可以使用这个参数类型，而且在调用的时候就知道他是什么类型。
interface genericIdentityFn2<T> {
  (arg: T): T
}

let myIdentity2: genericIdentityFn2<number> = identity3
