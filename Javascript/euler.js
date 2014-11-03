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
sum = function (arr) {
  var s = 0;
  for (i = 0; i < arr.length; i++) {
    s += arr[i];
  }
  return s;
}

exports.sum = sum;

// Export a function that returns the product of an array of integers
exports.product = function (arr) {
  if (arr instanceof Array) { 
    var product = 1;
    for (i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    return product;
  }
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
      if (i !== (n / i)) {
          factors.push(n / i);
        }
    }
  }
  return factors.sort(numSort);
}

isPrime = function(n) {
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
        if (i !== (n / i)) {
          factors.push(n / i);
        }
      }
    }
    if (factors.length > 2) {
      return false;
    }
  }
  return true;
}

exports.isPrime = isPrime;

exports.max = function (arr) {
  return arr.sort(numSortDesc)[0];
}

exports.min = function (arr) {
  return arr.sort(numSort)[0];
}

exports.arrayToSet = function(arr) {
  var obj = {};
  var set = [];

  for (var i = 0; i < arr.length; i++) {
    if (!(arr[i] in obj)) {
      obj[arr[i]] = typeof(arr[i]);
    }
  }

  for (key in obj) {
    if (obj[key] = 'number') {
      set.push(Number(key));
    } else {
      set.push(key);
    }
  }
  return set
}

exports.getNthPrime = function (n) {
  var primes = [];
  for (var i = 1; primes.length < n; i++) {
    if(isPrime(i)) {
      primes.push(i);
    }
  }
  return primes[primes.length - 1];
}

exports.getNthTriangle = function (n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

factorial = function (n) {
  if (n < 0 || typeof(n) !== 'number') {
    throw "Error: must pass a positive integer to factorial function."
  }
    az = [1,1,2];
    
    if (n <= 2) {
      return az[n];
    } 
      
    for (var i = 3; i <= n; i++) {
      az.push(i * az[az.length - 1]);
    }
    
    return az[az.length - 1];
    
}

exports.factorial = factorial;