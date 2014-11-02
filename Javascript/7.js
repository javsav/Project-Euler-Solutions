#!/usr/bin/env node

/*  Project Euler Solutions  Problem 7

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can
see that the 6th prime is 13.

What is the 10 001st prime number?  */

var euler = require('./euler.js');

var primes = [];

/* Get nth_prime from stdin */
var nth_prime = 10001;

if(process.argv.length > 2) {
  nth_prime = process.argv[2];
}

console.log(euler.getNthPrime(nth_prime));
