#!/usr/bin/env node

/* 
Project Euler Solutions
Problem 4

A palindromic number reads the same both ways. The largest palindrome made from
the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

var euler = require('./euler.js');

function isPalindrome(n) {
  return n.toString() === n.toString().split('').reverse().join('');
}

var palindromes = [];

for (var i = 999; i > 99; i--) {
  for (var j = 999; j > 99; j--) {
    if (isPalindrome(i * j)) palindromes.push(i*j);
  }
}

console.log(euler.max(palindromes));