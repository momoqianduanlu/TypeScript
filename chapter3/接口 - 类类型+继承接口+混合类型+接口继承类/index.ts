/**
 * 1. 实例接口
 * typeScript会对类的实例部分进行检查(currentTime，setTime)，构造器存在于类的静态部分(constructor)，typeScript不会做检查
 */
interface clockInterface {
  currentTime: Date

  setTime(d: Date)
}

/**
 * 2. 构造器接口
 */
interface clockConstructor {
  new(hour: number, minute: number)
}

// 用类去实现接口
class clock implements clockInterface {
  currentTime: Date

  constructor (h: number, m: number) {

  }

  setTime (d: Date) {
    this.currentTime = d
  }
}
