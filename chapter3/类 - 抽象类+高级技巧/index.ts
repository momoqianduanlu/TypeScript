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
let department: Department
department = new AccountingDepartment()
department.printName()
department.printMeeting()
// department.generateReports() // 错误: 方法在声明的抽象类中不存在
