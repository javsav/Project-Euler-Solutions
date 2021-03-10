#!/usr/bin/env node

/*  Project Euler Solutions  Problem 9

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc. 
*/

var euler = require('./euler.js');

var number = 1000;

if (process.argv.length > 2) {
  number = Number(process.argv[2]);
}

/* 
Note: this solution is derived from Euclid's formula:
a = m^2 - n^2, b = 2mn, c = m^2 + n^2 
*/

// Function to find a pythagorean triplet where a+b+c=s
function euclid (s) {
  for(var m = 0; m<s/2; m++) {
    for (var n = 0; n<s/2; n++) {
      if (Math.pow(m,2) + (m * n) === s/2) {
        var a = Math.pow(m,2) - Math.pow(n,2);
        var b = 2*m*n;
        var c = Math.pow(m,2) + Math.pow(n,2);
        if (a > 0 && b > 0 && c > 0) {
          if (Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2) && a + b + c === s) {
            return [a,b,c];
          }
        }
      }
    }
  }
}

console.log(euler.product(euclid(number)));
