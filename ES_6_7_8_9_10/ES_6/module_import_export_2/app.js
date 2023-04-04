import addition, { sub, myName } from "./math.js";

let num1 = +prompt("enter number 1", 10);
let num2 = +prompt("enter number 2", 5);

let addResult = addition(num1, num2);
let subResult = sub(num1, num2);

console.log(`addition of ${num1} & ${num2} is ${addResult}`);
console.log(`subtraction of ${num1} & ${num2} is ${subResult}`);
console.log(myName);
