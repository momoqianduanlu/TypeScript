// 混合类型的接口

interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  // 为什么在这里要使用 类型断言
  let counter = (function (start: number) {
    console.log(start)
    return String(start)
   }) as Counter
  counter.interval = 123
  counter.reset = function () { }
  return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0

/**
 *  正常写法 (报错)
 *  let counter:Counter
    counter = function(start:number){}
    counter.interval = 123
    counter.reset = function(){}

 * function(start:number){} TS 会把它推断为类型 (start:number) => void，
 * 然后这个类型是不具备 interval 和 reset 属性的，所以报错。
 * 其次，Counter 类型是有这俩属性的，所以你只要把这个函数断言成 Counter，就可以添加这俩属性。
 */