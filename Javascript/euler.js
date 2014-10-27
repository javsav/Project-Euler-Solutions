#!/usr/bin/env node

/* 
Project Euler Functions
*/

// Export a function that returns the sum of an array of integers
exports.sum = function (arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Declare a function that returns the nth fibonacci number
exports.fib = function (n) {
  var a = 0, b = 1;

  if( n <= 0) return 0;
  for (i = 0; i < n ; i++) {
     var c = a;
     a = b;
     b = c + b
  }
  return a;
}

exports.getFactors = function (n) {
  factors = [];
  for (i = 1; i <= Math.sqrt(n); i += 2) {
    if (n % i == 0) {
      factors.push(i);
    }
  }
  factors.push(n);
  return factors;
}

exports.isPrime = function(n) {
  var factors = [];
  for (i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      factors.push(i);
      if (factors.length > 1) {
        return false;
      }
    }
  }
  return true; // only one factor of 
}


