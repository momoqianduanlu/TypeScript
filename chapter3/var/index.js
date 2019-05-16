// function f() {
//   var a = 10
//   return function g() {
//     var b = a + 1
//     return b
//   }
// }

// var g = f()

// g()

function f(shouldInitialize) {
  if (shouldInitialize) {
    var x = 10
  }
  return x
}

f(true)
f(false)

function sumMatrix(matrix) {
  var sum = 0
  for (var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i]
    for (var j = 0; j < currentRow.length; j++) {
      sum += currentRow[j]
    }
  }
  return sum
}

var matrix = [
  [1, 2, 3],
  [4, 5, 6]
]

console.log(sumMatrix(matrix))

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 100 * i)
// }

for (var i = 0; i < 10; i++) {
  (function(j) {
    setTimeout(() => {
      console.log(j)
    }, 100 * j)
  })(i)
}
