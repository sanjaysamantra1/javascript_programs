import { add, sub, myName } from "./math.js";

let num1 = +prompt("enter number 1");
let num2 = +prompt("enter number 2");

console.log(`addition of ${num1} & ${num2} is ${add(num1, num2)}`);
console.log(`subtraction of ${num1} & ${num2} is ${sub(num1, num2)}`);
console.log(myName);
