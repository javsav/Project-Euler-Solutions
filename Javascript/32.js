#!/usr/bin/env node

/*  Project Euler Solutions  Problem 32

145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the
factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are not included. */

var euler = require('./euler.js');

var start = 3, stop = 1000000;

var answer = []

for (var i = start; i < stop; i++) {

  var str = i.toString().split('');
  var nums = [];
  var f = [];
  
  for (var j = 0; j < str.length; j++) {
    nums.push(Number(str[j]));
  }
  
  for (var k = 0; k < nums.length; k++) {
    f.push(euler.factorial(nums[k]));
  }

  if (euler.sum(f) === i) {
    answer.push(i);
  }

}

console.log(euler.sum(answer));