#!/usr/bin/env node

/* 
Project Euler Solutions
Problem 2
*/

var euler = require('./euler.js');

var even_fibs = [];

for (n = 0; euler.fib(n) < 4000000; n += 1) {
  if (euler.fib(n) % 2 == 0) {
    even_fibs.push(euler.fib(n));
    console.log(euler.fib(n));
  }
}

console.log(euler.sum(even_fibs));