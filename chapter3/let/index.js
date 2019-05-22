// 声明一个二维数组
var list = [[1, 2, 3]];
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var j = 0; j < currentRow.length; j++) {
            sum += currentRow[j];
        }
    }
    return sum;
}
var matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(sumMatrix(matrix));
