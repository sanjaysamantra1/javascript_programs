export default function add(a, b) {
  // default
  return a + b;
}
export function sub(a, b) {
  // named
  return a - b;
}
export function mul(a, b) {
  return a * b;
}
export const PI = 3.141;

export function f1() {
  console.log("I am f1...");
  f2();
}
function f2() {
  console.log("I am f2...");
}

// ES - Module System
// export - Named Export, Default Export

// import React, { Component } from 'react';
