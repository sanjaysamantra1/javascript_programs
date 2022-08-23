import mul, { add, sub } from "./math";

let num1 = +prompt("enter number 1");
let num2 = +prompt("enter number 2");

console.log(`addition of ${num1} & ${num2} is ${add(num1, num2)}`);
console.log(`subtraction of ${num1} & ${num2} is ${sub(num1, num2)}`);
console.log(`Multiplication of ${num1} & ${num2} is ${mul(num1, num2)}`);
