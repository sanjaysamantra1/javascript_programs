let name = "sachin";
let age = 45;
let add = "mumbai";

function f1() {
  console.log("this is f1....");
}
function f2() {
  console.log("this is f2....");
}

module.exports = {
  name: name,
  address: add,
  f1: f1,
  f2: f2,
};
