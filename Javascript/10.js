#!/usr/bin/env node

/*  Project Euler Solutions  Problem 10

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

var euler = require('./euler.js');

var number = 2000000;

if (process.argv.length > 2) {
  number = Number(process.argv[2]);
}

var primes = [2];

for (var i = 3; i < number; i += 2) {
  if (euler.isPrime(i)) {
    primes.push(i);
  }
}

console.log(euler.sum(primes));
