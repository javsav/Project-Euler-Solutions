#!/usr/bin/env node

/* 
Project Euler Solutions
Problem 17 
*/

// Declare base array and variables
var onetToNine = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];
var tenToNineteen = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen"
];
var twentyToNinety = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety"
];
var hundred = "hundred";
var thousand = "onethousand";
var theHundreds = [];
var theBigOne = [];


// Push 1-9 to theBigOne array
for (var i = 0; i < onetToNine.length; i++) {
  theBigOne.push(onetToNine[i]);
}

// Push 10-19 to theBigOne array
for (var i = 0; i < tenToNineteen.length; i++) {
  theBigOne.push(tenToNineteen[i]);
}

// Push 20-99 to theBigOne array
for (var x=0; x < twentyToNinety.length; x++) {
  theBigOne.push(twentyToNinety[x]);
  for (var y=0; y < onetToNine.length; y++) {
    theBigOne.push(twentyToNinety[x] + onetToNine[y]);
  }
}

// Push 100-999 to theBigOne array
for (var l = 0; l < onetToNine.length; l++) {
  theHundreds.push(onetToNine[l] + hundred);
}
for (var i = 0; i < theHundreds.length; i++) {
  // push to answer all hundreds from one to nine
  theBigOne.push(theHundreds[i]);
  for (var m = 0; m < onetToNine.length; m++) {
    theBigOne.push(theHundreds[i] + "and" + onetToNine[m]);
    //console.log(theHundreds[i] + "and" + onetToNine[m]);
  }
  for (var n = 0; n < tenToNineteen.length; n++) {
    theBigOne.push(theHundreds[i] + "and" + tenToNineteen[n]);
    //console.log(theHundreds[i] + "and" + tenToNineteen[n]);
  }
  for (var j = 0; j < twentyToNinety.length; j++) {
    theBigOne.push(theHundreds[i] + "and" + twentyToNinety[j]);
    //console.log(theHundreds[i] + "and" + twentyToNinety[j]);
    // push to get numbers into hundreds
    for (var k = 0; k < onetToNine.length; k++) {
      theBigOne.push(theHundreds[i] + "and"+ twentyToNinety[j] + onetToNine[k])
      //console.log(theHundreds[i] + "and"+ twentyToNinety[j] + onetToNine[k])
    }
  }
}

// Push 1000 to theBigOne array
theBigOne.push(thousand)

// Print answer to stdout
console.log(theBigOne.join('').length);
