#!/usr/bin/env node

/*  Project Euler Solutions  Problem 35

The number, 197, is called a circular prime because all rotations of
the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31,
37, 71, 73, 79, and 97.

How many circular primes are there below one million? */

var euler = require('./euler.js');

var start = 3, stop = 1000000;

var answer = [];

var primesUnderAMillion = [2];

// Step One:
// Generate a list of all prime numbers under a million
for (var i = start; i < stop; i += 2) {
  if (euler.isPrime(i)) {
    primesUnderAMillion.push(i);
  }
}


// Step Two:
// Drop from the list anything that contains a 5 or an even number
var e = primesUnderAMillion.filter(function(a) {
  var result = true;
  var arrayedNumber = a.toString().split('');
  for (var m = 0; m < arrayedNumber.length; m += 1) {
    if (a.toString().length > 1) {
      if (Number(arrayedNumber[m]) % 2 == 0 || Number(arrayedNumber[m]) == 5) {
        result = false;
      }
    }
  }
  return result;
});




// Step Three:
// Determine all rotations for each prime
for (var j = 0; j < e.length; j += 1) {
  var rotations = euler.getAllRotations(e[j]);
 

// Step Four:
// if any rotation of a number is not a prime say it is not circular
  if (rotations.every(function(a) { return euler.isPrime(a) })) {
    answer.push(e[j]);
    }

}
console.log(answer.length);
/*
*/
