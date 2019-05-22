// 声明一个二维数组
let list: number[][] = [[1, 2, 3]]

function sumMatrix(matrix: number[][]) {
  let sum = 0
  for (let i = 0; i < matrix.length; i++) {
    let currentRow = matrix[i]
    for (let j = 0; j < currentRow.length; j++) {
      sum += currentRow[j]
    }
  }
  return sum
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6]
]

console.log(sumMatrix(matrix))
