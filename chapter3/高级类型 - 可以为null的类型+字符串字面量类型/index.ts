let s = 'foo'
s = null

let sn: string | null = 'bar'
sn = null

sn = undefined



// --strictNullChecks 在可选参数和可选属性上的应用
function f (x: number, y?: number) { // 当我们开启 --strictNullChecks 的时候，可选参数会自动识别为 number 和 undefined
  return x + (y || 0)
}

f(1, 2)
f(1)
f(1, undefined)
f(1, null) // Error null不能赋值给 number和undefined的类型


class C {
  a: number
  b?: number
}

let c = new C()
c.a = 12
c.a = undefined
c.b = 13
c.b = undefined
c.b = null


// null的类型保护和类型断言
function fn (sn: string | null): string {
  // 有些时候编译器不能去除 null 和 undefined，这时候我们可以用 类型断言 手动去除，语法是一个 ！
  return sn! || 'default'
}

function broken (name: string | null): string {
  function postfix (epithet: string) {
    // 使用类型断言排除 null
    return name!.charAt(0) + epithet
  }

  name = name || 'Bob'
  return postfix(name)
}

broken(null)