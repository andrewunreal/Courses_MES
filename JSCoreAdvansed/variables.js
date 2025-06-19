console.log(c);// ReferenceError: Cannot access 'c' before initialization
console.log(b);// ReferenceError: Cannot access 'b' before initialization
console.log(a);// undefined (работает hoisting)

var a = 10;
let b = 3;
const c = 1;

// Эта часть сработает если не пытаться вывести переменные, которые объявлены без помощи var в первом блоке вывода в консоль
console.log(a); //10
console.log(b); //3
console.log(c); //1
