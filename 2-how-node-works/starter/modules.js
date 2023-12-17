const C = require("./test-m1");
const calc = new C();
console.log(calc.add(3, 4));

const calc2 = require("./test-m2")
console.log(calc2.add(2, 8));

const { add, multiply, divide } = require("./test-m2");
console.log(add(2, 8));
// console.log(arguments)
