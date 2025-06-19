function sum (num) {
if (num.length === 1) {
    return num;
}
else {
    const newNum = num.toString().split('').map(Number);
    firstElem = newNum.pop();
    lastElem = newNum.shift();
    return firstElem + lastElem;;
}
}
console.log(sum(523229));