#!/usr/bin/env node

/* 
Project Euler Functions
*/

// Local (not exported) functions
// Sort helpers
// Sort an array of numeric values in ascending order 
// by calling arr.sort(numSort);
function numSort (a, b) {
  return a - b;
}

// Sort an array of numeric values in ascending order 
// by calling arr.sort(numSortDesc);
function numSortDesc (a, b) {
  return b - a;
}


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
  for (i = 1; i < (Math.floor(Math.sqrt(n)) + 1); i += 1) {
    if (n % i == 0) {
      factors.push(i);
      factors.push(n / i);
    }
  }
  return factors.sort(numSort);
}

exports.isPrime = function(n) {
  // return false if an undefined, null or non-number is passed
  if (n === null || n === undefined || typeof(n) !== "number") {
    return false;
  }
  if (n === 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }

  var factors = [];
  
  for (i = 1; i < Math.floor(Math.sqrt(n)) + 1; i++) {
    if (n % i == 0) {
      if (factors.length > 2) {
        return false;
      } else {
        factors.push(i);
        factors.push(n / i);
      }
    }
    if (factors.length > 2) {
      return false;
    }
  }
  return true;
}

exports.max = function (arr) {
  return arr.sort(numSortDesc)[0];
}

exports.min = function (arr) {
  return arr.sort(numSort)[0];
}
