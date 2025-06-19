function sumOfSquares (arr) {
    totalSum = 0;
    arr.forEach(num => {
        totalSum += num * num;
    });
    return totalSum;
}
console.log(sumOfSquares([1, 2, 3, 4, 5, 6]));