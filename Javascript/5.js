#!/usr/bin/env node

/*  Project Euler Solutions 
Problem 5: Smallest multiple

2520 is the smallest number that can be divided by each of the 
numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible 
by all of the numbers from 1 to 20? */


/* Algorithm:
Test all numbers, beginning with 2520, 
as it is the smallest multiple of 1..10. Test for divisibility 
by 11..20 as these are unique in the set 1..20. Break as soon as
number is divisible by all. */

var test = 2520;

while (test) {
  var i = 11;
  var bool = true;

  while (i <= 20) {
    if (test % i > 0) {
      bool = false;
      break;
    }
    i++;
  }
  if (bool == true) {
    console.log(test);
    break;
  }
  test++;
}