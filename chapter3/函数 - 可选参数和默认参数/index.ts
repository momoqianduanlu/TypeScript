// typescript里面呢他是每个函数参数都是必须的，也就是说传递给一个函数参数的个数必须与函数期望的个数是一致的

// function buildName (firstName: string, lastName: string): string {
//   return firstName + '' + lastName
// }

// let result1 = buildName('Bob')
// let result2 = buildName('Bob', 'Adams', 'Sr.')
// let result3 = buildName('Bob', 'Adams')


// 可选参数 可选参数必须跟在必填参数的后面，否则会报错
// function buildName (firstName: string, lastName?: string): string {
//   if (lastName) {
//     return firstName + '' + lastName
//   } else {
//     return firstName
//   }
// }

// let result1 = buildName('Bob')
// let result2 = buildName('Bob', 'Adams', 'Sr.')
// let result3 = buildName('Bob', 'Adams')


// 默认参数
// function buildName (firstName: string, lastName = 'Smith'): string {
//   return firstName + '' + lastName
// }

// let result1 = buildName('Bob')
// let result2 = buildName('Bob', 'Adams', 'Sr.')
// let result3 = buildName('Bob', 'Adams')


// 与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。 如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined 值来获得默认值。
// function buildName(firstName = 'Will', lastName: string): string {
//   return firstName + ' ' + lastName
// }

// let result1 = buildName('Bob')                  // Error, 参数过少
// let result2 = buildName('Bob', 'Adams', "Sr.")  // Error, 参数过多
// let result3 = buildName('Bob', 'Adams')         // OK， 返回 "Bob Adams"
// let result4 = buildName(undefined, 'Adams')     // OK，  返回 "Will Adams"


// 剩余参数
function buildName(firstName: string, ...restOfName: string[]): string {
  return firstName + ' ' + restOfName.join('')
}

let employeeName = buildName('Joseph', 'Samuel', 'Lucas', 'MacKinzie')
console.log(employeeName)

let buildNameFun: (fName: string, ...rest: string[]) => string = buildName
