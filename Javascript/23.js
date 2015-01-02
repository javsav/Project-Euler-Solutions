#!/usr/bin/env node

/* 
Project Euler Solutions

Problem 23
Non-abundant sums
A perfect number is a number for which the sum of its proper
divisors is exactly equal to the number. For example, the sum
of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28,
which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper 
divisors is less than n and it is called abundant if this sum 
exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, 
the smallest number that can be written as the sum of two 
abundant numbers is 24. By mathematical analysis, it can be 
shown that all integers greater than 28123 can be written as 
the sum of two abundant numbers. However, this upper limit 
cannot be reduced any further by analysis even though it is 
known that the greatest number that cannot be expressed as the 
sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be 
written as the sum of two abundant numbers.
*/

var euler = require('./euler.js');

var abundantNumbers = [];
var abundantSums = [];

var limit = 28123
var limitRoot = (limit / 2) + 1;

// Collect all abundandt numbers below the limit
for (var i = 12; i < limit; i++) {
  if (euler.isAbundantNumber(i)) {
    abundantNumbers.push(i);
  }
}

// Collect a list of the sum of each combination of two abundant numbers
for (var i = 0; i < abundantNumbers.length; i++) {
  if (abundantNumbers[i] > limitRoot) {
    break;
  }
  for (var j = i; j < abundantNumbers.length; j++) {
    var s = abundantNumbers[i] + abundantNumbers[j];
    if (s > limit) {
      break;
    }
    else {
      if (abundantSums.indexOf(s) === -1) {
        abundantSums.push(s);
      }
    }
  }
}

abundantSums.sort();

var nonAbundantSums = [];

// Generate a list of numbers below the limit not in our list of sums
for (var i = 0; i <= limit; i++) {
  if (abundantSums.indexOf(i) === -1) {
    nonAbundantSums.push(i);
  }
}

console.log(euler.sum(nonAbundantSums));


