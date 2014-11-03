#!/usr/bin/env node

/*  Project Euler Solutions  Problem 30

Surprisingly there are only three numbers that can be written as the
sum of fourth powers of their digits:

1634 = 14 + 64 + 34 + 44 8208 = 84 + 24 + 04 + 84 9474 = 94 + 44 + 74
+ 44 As 1 = 14 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of
fifth powers of their digits. */

var euler = require('./euler.js');

var pow = 5

var start = pow // Minimum number to be considered is n(1^n)

var stop = pow * Math.pow(9, pow);


if (process.argv.length > 2) {   
  pow = Number(process.argv[2]);
  if (process.argv.length > 3) {
    stop = Number(process.argv[3]);
  }
}

//console.log(stop);

var answer = [];
for (var i = start; i < stop; i += 1) {
  var digits = [];
  var str = i.toString().split('');

  for (var k = 0; k < str.length; k++) {
    digits.push(Number(str[k]));
  }

  var digits_exp = [];

  for (var j = 0; j < digits.length; j++) {
    digits_exp.push(Math.pow(digits[j], pow));
  }
  if (euler.sum(digits_exp) === i) {
    answer.push(i);
    //console.log(i);
  }
}

console.log(euler.sum(answer));

