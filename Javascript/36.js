#!/usr/bin/env node

/*  Project Euler Solutions  Problem 36

The decimal number, 585 = 10010010012 (binary), is palindromic in both
bases.

Find the sum of all numbers, less than one million, which are
palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not
(include leading zeros.) */

var euler = require('./euler.js');

var start = 1, stop = 1000000;

var answer = [];

var pairs = [];

for (var i = start; i < stop; i++) {
  var obj = {};
  obj['key'] = i;
  obj['value'] = i.toString(2); // convert to binary
  pairs.push(obj);
}

for (var j = 0; j < pairs.length; j++) {
  if (euler.isPalindrome(pairs[j]['key']) && euler.isPalindrome(pairs[j]['value'])) {
      answer.push(pairs[j]['key']);
  }
}

console.log(euler.sum(answer));
