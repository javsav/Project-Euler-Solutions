#!/usr/bin/env node

/*  Project Euler Solutions 
Problem 6

The sum of the squares of the first ten natural
numbers is,

1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural
numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred
natural numbers and the square of the sum. */

var euler = require('./euler.js');

var nums = [];

for (var i = 1; i <= 100; i++) {
  nums.push(i);
}

var square_of_nums = Math.pow(euler.sum(nums), 2);

var nums_squared = [];

for (var i = 0; i < nums.length; i++) {
  nums_squared.push(Math.pow(nums[i],2));
}

var sum_of_squares = euler.sum(nums_squared)

console.log(square_of_nums - sum_of_squares);
