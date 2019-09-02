// TypeScript 里，在有些没有明确指出类型的地方，类型推断会帮助提供类型。

// let x = 3

// 最佳通用类型

let x = [0, 1, null]

/**
 * 为了推断 x 的类型，我们必须考虑所有元素的类型。 这里有两种选择：number 和 null。 
 * 计算通用类型算法会考虑所有的候选类型，并给出一个兼容所有候选类型的类型。
 * 由于最终的通用类型取自候选类型，有些时候候选类型共享一个公共结构，但是却没有一个类型能做为所有候选类型的超级类型。
 */

class Animal {
  numLegs: number
}

class Bee extends Animal {

}

class Lion extends Animal {

}

let zoo: Animal[] = [new Bee(), new Lion()]

// Animal 是 Bee 和 Lion 的公共结构，但是 Zoo 这个数组中没有对象是 Animal 类型的，我们可以明确地声明我们期望的类型

// 如果没有找到最佳通用类型的话，类型推断的结果为联合数组类型，(Bee | Lion)[]
