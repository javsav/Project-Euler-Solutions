#!/usr/bin/env node

/* Work Still Required:
 -- Need an else in constructor - why?
 -- module.exports Big
 -- Arrays with negative numbers need attention

*/



/* Constructor */
function Big(input) {

// Object type inputs
  if (input instanceof Big) {
    try {
        this.sign = input.sign;
        this.number = input.number;
    } catch (error) {
        console.log("Invalid OBJECT passed");
        throw new Error(error);
    }
  }

// Number type inputs
  if (typeof input === 'number') {
    // Ensure only ZERO or integers are supplied
    if (! (input === 0 || input % 1 === 0)) throw "Error: Integer values only.";
    
    if (input < 0) {
      this.sign = 'NEGATIVE';
    }
    else if (input > 0) {
      this.sign = 'POSITIVE';
    }
    else {
      this.sign = 'NEUTRAL';
    }
    if (this.sign === 'NEGATIVE') {
      var string = input.toString();
      this.number = string.slice(1, string.length).split('').map(function(a) {return Number(a)});
    } else {
      this.number = input.toString().split('').map(function(a) {return Number(a)});
    }
    
  }

  // String type inputs
  if (typeof input === 'string') {

    // Ensure only ZERO or integers are supplied
    if (!(input.indexOf('.'))) throw "Error: Integer values only.";
    
    if (input[0] === '-') {
      this.sign = 'NEGATIVE';
    }
    else if (input === '0') {
      this.sign = 'NEUTRAL';
    }
    else {
      this.sign = 'POSITIVE';
    }
    
    if (this.sign === 'NEGATIVE') {
      this.number = input.slice(1,input.length).split('').map(function(a) {return Number(a)});
    } 
    else {
      this.number = input.split('').map(function(a) {return Number(a)});
    }
  }

  // Array type inputs
  if (input instanceof Array ) {
    if (input[0] === '-') {
      this.sign = 'NEGATIVE';
      this.number = input.slice(1, input.length).map(function(a) {return Number(a)});
    }
    else if (input.length === 1 && input[0] === 0) {
      this.sign = 'NEUTRAL';
    }
    else {
      this.sign = 'POSITIVE';
    }
    if (this.sign === 'NEGATIVE') {
      var array = input;
      this.number = array.slice(1, array.length).map(function(a) {return Number(a)});
 
    } 
    else {
      this.number = input.map(function(a) {return Number(a)});
    }
  }
}





/* Comparison */

// Define 'abs' method
Big.prototype.abs = function () {
  var x = this;
  var z = new Big();
  z.sign = 'POSITIVE';
  z.number = x.number;
  return z;
}


// Define 'invert' method (invert sign) 
Big.prototype.invert = function () {
  var x = this;
  if (x.sign === 'POSITIVE') {
    x.sign = 'NEGATIVE';
  }
  else if (x.sign === 'NEUTRAL') {
    x.sign = 'NEUTRAL';
  }
  else {
    x.sign = 'POSITIVE';
  }
  return x;
}

// Define 'eq' method
Big.prototype.eq = function (big2) {
    
  if (!(big2 instanceof Big)) {
    var big2 = new Big(big2);
  }

  var x = this;
  var y = big2;

  if (x.sign != y.sign) {
    return false;
  }
  if (x.number.length != y.number.length) {
    return false
  }
  if (x.number.length === y.number.length) {
    for (var i = 0; i < x.number.length; i++) {
      if (x.number[i] != y.number[i]) {
        return false
      }
    }
  }
  return true;
}


// Define 'gt' method
Big.prototype.gt = function (big2) {
    
  if (!(big2 instanceof Big)) {
    var big2 = new Big(big2);
  }

  var x = this;
  var y = big2;

  if (x.sign === 'POSITIVE') {
    if (y.sign === 'NEGATIVE') {
      return true;
    }
    else if (y.sign === 'POSITIVE') {
      if (x.number.length > y.number.length) {
        return true;
      }
      if (x.number.length < y.number.length) {
        return false;
      }
      else { // Both positive and of equal length
        for (var i = 0; i < x.number.length; i++) {
          if (x.number[i] > y.number[i]) {
            return true;
          }
          if (y.number[i] > x.number[i]) {
            return false;
          }
          // if each digit is the same, continue through loop
        }
      }

    }
    return false; // must be equal
  }
  else if (x.sign === 'NEGATIVE')  {
    if (y.sign === 'POSITIVE') {
      return false;
    } 
    else if (y.sign === 'NEGATIVE') {
      if (x.number.length > y.number.length) {
        return false;
      }
      if (x.number.length < y.number.length) {
        return true;
      }
      else { // Both positive and of equal length
        for (var i = 0; i < x.number.length; i++) {
          if (x.number[i] > y.number[i]) {
            return false;
          }
          if (y.number[i] > x.number[i]) {
            return true;
          }
          // if each digit is the same, continue through loop
        }
      }
    } 
  }
  
  else {
    return false // if this is written correctly, this would mean they are equal
  }


}


// Define 'gte' method
Big.prototype.gte = function (big2) {
    
  if (!(big2 instanceof Big)) {
    var big2 = new Big(big2);
  }

  var x = this;
  var y = big2;

return (x.gt(y) || x.eq(y))

}


// Define 'lt' method
Big.prototype.lt = function (big2) {
    
  if (!(big2 instanceof Big)) {
    var big2 = new Big(big2);
  }

  var x = this;
  var y = big2;

  return (!(x.gte(y))) // if not greater or equal to, must be less than :)
}


// Define 'lte' method
Big.prototype.lte = function (big2) {
    
  if (!(big2 instanceof Big)) {
    var big2 = new Big(big2);
  }

  var x = this;
  var y = big2;

  return (!(x.gt(y))) // if not greater than, must be less than or equal to :)
}





/* Addition */

// Define 'add' method
Big.prototype.add = function (big2) {

  var x = this;

  if (!(big2 instanceof Big)) {
    var big2 = new Big(big2);
  }

  var y = big2;

// if x or y = 0; return x or y
  if (y.eq(0)) {
    return x;
  }
  if (x.eq(0)) {
    return y;
  }
  
//if signs are different, call 'subtract' method instead
  if (x.sign !== y.sign) {
    return x.subtract(y.invert());
  }


// Add leading zeroes to ensure we add big2 to this
  if (y.number.length > x.number.length) {
    x.number.reverse();
    for (var i = 0; i < (y.number.length - x.number.length + 1); i++) {
      x.number.push(0);
    }
    x.number.reverse();
  }

// Reverse direction of arrays to perform loops in correct order
  x.number.reverse();
  y.number.reverse();

// Perform addition
  for (var i = 0; i < y.number.length; i++) {
    x.number[i] += y.number[i];
  }

// Perform carrying
  for (var i = 0; i < x.number.length; i++) {
    if (x.number[i] > 9) {
      var next = 0;
      if (x.number[i + 1]) {
        next = x.number[i + 1];
      } else {
        x.number[i + 1] = next;
      }

      x.number[i+1] += Math.floor(x.number[i] / 10);
      x.number[i] -= 10 * (Math.floor(x.number[i] / 10));
    }
  }

// Correct the direction of x.number and return x
  x.number.reverse();
  return x;
}





/* Subtraction */

// Define 'subtract' method
Big.prototype.subtract = function (big2) {
  
  var x = this;

  if (!(big2 instanceof Big)) {
    var big2 = new Big(big2);
  }
  var y = big2;
// If x = 0, return -y, if y = 0, return x
  if (y.eq(0)) {
    return x;
  }
  if (x.eq(0)) {
    return y.invert();
  }

//if signs are different, call 'add' method instead
  if (x.sign !== y.sign) {
    return x.add(y.invert());
  }
// if x = y return 0
  if (x.eq(y)) {
    return new Big(0);
  }
// Perform subtraction
// If |x| > |y| put x on top
var absX = x;
var absY = y;
  if (absX.abs().gt(absY.abs())) {
    topNumber = x.number;//.reverse();
    bottomNumber = y.number;//.reverse();
    inversionNeeded = 0;
  } 
// Else put y on top and call .invert() later
  else {
    topNumber = y.number;
    bottomNumber = x.number;
    inversionNeeded = 1;
  }


// Fill out bottomNumber with leading zeroes
if (bottomNumber.length < topNumber.length) {
    bottomNumber.reverse();
    for (var i = 0; i < (topNumber.length - bottomNumber.length + 1); i++) {
      bottomNumber.push(0);
    }
    bottomNumber.reverse();
  }


// Perform subtraction
  var result = [];
  topNumber.reverse();
  bottomNumber.reverse();
  for (var i = 0; i < topNumber.length; i++) { // for all digits in number...
    if (topNumber[i] - bottomNumber[i] >= 0) { // if top digit >= bottom digit
      
      result.push(topNumber[i] - bottomNumber[i]); // push to answer,otherwise...
    }
    //borrowing required
    else {
      
      for (var j = 1; bottomNumber[i] > topNumber[i]; j++) {
        if (topNumber.length >= i + j) { // can borrow
          if (topNumber[i + j] > 0) { // can stop borrowing
            for(; j > 0; j--) {
              topNumber[i + j] -= 1;
              topNumber[i + j - 1] += 10;
            }
            result.push(topNumber[i] - bottomNumber[i]);
            break;
          }
          
        } 
        else { // can't borrow
          result.push(10 + topNumber[i] - bottomNumber[i]);
          inversionNeeded += 1;
          break;
        }
       } 
    }
  }


  var sign = x.sign;
  result.reverse();
  
  if (inversionNeeded % 2 === 1) {
    sign = x.invert().sign;
  }

  var z = new Big();
  z.sign = sign;
  z.number = result;
  z.trimLeadingZeroes();
  if (z.number === [0]) {z.sign = 'NEUTRAL';}
  return z;

}





/* Multiplication */

// Define 'multiply' method
Big.prototype.multiply = function (big2) {
  if (!(big2 instanceof Big)) {
    var big2 = new Big(big2);
  }

  var x = this;
  var y = big2;

  var negCount = 0;
  if (x.sign == 'NEGATIVE') negCount++;
  if (y.sign == 'NEGATIVE') negCount++;

  var resultSign = 'POSITIVE';
  if (negCount % 2 == 1) resultSign = 'NEGATIVE';

  x.number.reverse();
  y.number.reverse();

  var result = [];

  for (var i = 0; i < x.number.length; i++) {
    for (var j = 0; j < y.number.length; j++) {
      var originalValue = 0;
      var k = i + j;

      if (result[k]) {
        originalValue = result[k];
      }

      result[k] = (x.number[i] * y.number[j]) + originalValue;

      if (result[k] > 9) {
        nextPositionOriginalValue = 0;
        
        if (result[k+1]) {
          nextPositionOriginalValue =  result[k + 1];
        } 
        else {
          result[k + 1] = nextPositionOriginalValue;
        }  

        result[k + 1] += Math.floor(result[k] / 10);

        result[k] -= Math.floor(result[k] / 10) * 10;
      }
      


    }
  }
  x.number.reverse();
  y.number.reverse();


  var z = new Big();
  z.sign = resultSign;
  z.number = result.reverse();
  z.trimLeadingZeroes();
  if (z.number === [0]) {z.sign = 'NEUTRAL';}
  return z;
}





/* Formatting Methods */

// convert Big object to String
Big.prototype.toString = function() {
  var string = (this.sign === 'NEGATIVE' ? '-' : '');
  string += this.number.join('');
  return string;
}

// convert Big object to an Array -- needs to implement sign
Big.prototype.listify = function () {
  var x = this.number;
  if (this.sign === 'NEGATIVE') {
    x.unshift('-');
  }
  return x;
}

// Convert Big object to Number -- needs to implement sign
Big.prototype.numify = function () {
  var x = Number(this.number.join(''));
  if (this.sign === 'NEGATIVE') {
    x = (x * -1);
  }
  return x;
}

Big.prototype.trimLeadingZeroes = function () {
  var x = this;
  var i = x.number.length - 1;
  if (x.number.length > 1) {
    x.number.reverse()
    while (x.number[i] === 0) {
      x.number.pop();
      i--;
    }
    x.number.reverse();
  }
  return x;
}




/* Aliasing Methods */

// Alias 'add' method as 'plus'
Big.prototype.plus = Big.prototype.add;


// Alias 'subtract' method as 'minus' and 'take'
Big.prototype.minus = Big.prototype.subtract;
Big.prototype.take = Big.prototype.subtract;


exports.Big = Big;





