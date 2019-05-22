// 定义一个正方形接口
interface Square {
  color: string,
  area: number
}

// 定义一个正方形配置的接口
interface SquareConfig {
  color?: string,
  width?: number
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

let mySquare = createSquare({ color: 'black' })



// 只读属性
interface Point {
  readonly x: number,
  readonly y: number
}

let p1: Point = { x: 10, y: 20 }

// p1.x = 5 // Error
let a: number[] = [1, 2, 3, 4]
// 定义一个泛型只读数组
let ro: ReadonlyArray<number> = a
// ro[0] = 12 // Error