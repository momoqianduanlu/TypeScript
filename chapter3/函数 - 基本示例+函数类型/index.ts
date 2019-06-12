function add (x: number, y: number): number {
  return x + y
}

// 函数类型其实是包括两部分的，一个是参数类型，另外一个是返回值类型

let myAdd: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
  return x + y
}