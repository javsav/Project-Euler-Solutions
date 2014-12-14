#!/usr/bin/env node

/* 
Project Euler Solutions
Problem 19
*/


// Define a function to determine if a given year is a leap year
function isLeapYear(year) {
  // If year is not divisible by 4 it is not a leap year
  if (year % 4 != 0) {
    return false;
  } 
  // If year is divisible by 400 it is a leap year
  else {
    if (year % 400 == 0) {
      return true;
    } 
  // if year is divisible by 100 (but not 400) it is not a leap year
  else {
      if (year % 100 == 0) {
        return false;
      }
    }
  }
  // If year is divisible by 4 (and not by 100 or 400) it is a leap year
  return true;
}


// Declare a counter variable
var firstDayOfTheMonthSundays = 0;

// January 1st 1901 was a Tuesday
var dayZero = 2;

// Iterate through each year 1901 - 2000, inclusive
for (var year = 1901; year < 2001; year++) {
  var daysPerMonth = [
    31,
    isLeapYear(year) ? 29 : 28, // February
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31];

  for (var i = 0; i < daysPerMonth.length; i++) {
    // Increase dayZero variable by number of days in each month
    dayZero += daysPerMonth[i];
    // Increment firstDayOfTheMonthSundays variable if first day is a Sunday
    if (dayZero % 7 == 0) {
      firstDayOfTheMonthSundays++;
    }
  }

}

console.log(firstDayOfTheMonthSundays);

