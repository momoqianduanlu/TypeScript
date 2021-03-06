// 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。

abstract class Department {
  name: string

  constructor (name: string) {
    this.name = name
  }

  printName () :void {
    console.log('Department name' + this.name)
  }

  abstract printMeeting () :void
}


// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
class AccountingDepartment extends Department {
  constructor () {
    super('Accounting ad Auditing')
  }

  printMeeting () :void {
    console.log('The Accounting Department meets each Monday at 10am')
  }

  generateReports () :void {
    console.log('Generating accounting reports...')
  }
}

// 类 也可以作为类型
let department: Department // 允许创建一个对抽象类型的引用
department = new AccountingDepartment()
department.printName()
department.printMeeting()
// department.generateReports() // 错误: 方法在声明的抽象类中不存在，为什么我们不能在 new AccountingDepartment() 中调用 generateReports()？
// 因为我们为 department 变量 声明他是 Department 类型，而在抽象类中没有定义 generateReports，所以 typescript 会认为 department.generateReports() 不存在
