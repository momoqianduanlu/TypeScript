let input: [number, number] = [1, 2]

// 1.*** 给数组的解构指定类型
function f([first, second]: [number, number]) {
  console.log(first)
  console.log(second)
}

f(input)

let o = {
  a: 'foo',
  b: 12,
  c: 'bar'
}

// let {a, ...passthrough} = o
// let total = passthrough.b + passthrough.c.length
// console.log(total)

// 2.*** 给对象的解构指定类型
let {a, b}: {a: string, b: number} = o

// 3.函数默认参数的解构 (b是一个可传可不传的参数)
function keepWholeObject(wholeObject: {a: string, b?: number}) {
  let {a, b=1001} = wholeObject
}

// 4.函数参数有默认值
function ff({a = '', b = 0} = {a: ''}): void {

}

ff({a: 'yes'})
ff()
ff({}) // 报错
