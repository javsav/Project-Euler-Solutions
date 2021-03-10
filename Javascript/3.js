#!/usr/bin/env node

/* 
Project Euler Solutions
Problem 3
*/

var euler = require('./euler.js');

var input = 600851475143;
//var input = 5001;
var factors = euler.getFactors(input);
console.log(factors);


var primeFactors = [];

for (j = 0; j < factors.length; j++) {
  if (euler.isPrime(factors[j])) {
    primeFactors.push(factors[j]);
  } 
}

console.log(primeFactors);
console.log("Max prime factor: " + euler.max(primeFactors).toString());
console.log("Min prime factor: " + euler.min(primeFactors).toString());
