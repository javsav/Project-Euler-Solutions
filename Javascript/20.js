#!/usr/bin/env node

/* 
Project Euler Solutions
Problem 20
*/


var euler = require('./euler.js');

var Big = require('./simpleBigInt.js').Big;

var x = new Big(100);

var j = euler.sum(euler.factorial(x).number);

console.log(j);