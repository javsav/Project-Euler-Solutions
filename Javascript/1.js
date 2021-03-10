#!/usr/bin/env node

/* 
Project Euler Solutions
Problem 1
*/

var euler = require('./euler.js');

var multiples = [];

// Push all multiples of three to array
for (i = 1; i < 1000; i += 1) {
  if (i % 3 === 0) {
    multiples.push(i);
  }
}

// Push all multiples of five that aren't also
// multiples of three (no inbuilt set datatype until ES6)
for (i = 1; i < 1000; i += 1) {
  if (i % 5 === 0 && i % 3 !== 0) {
    multiples.push(i);
  }
}

console.log(euler.sum(multiples));