#!/usr/bin/env node

/* 
Project Euler Solutions
Problem 67
*/

var fs = require('fs');
var fileName = '../p067_triangle.txt'


function maxSum(one, two, shared) {
    var a = one + shared;
    var b = two + shared;
    return Math.max(a, b);
}

function maxPath(triangle) {

    var triangleHeight = triangle.length - 1;

    for (var row = triangleHeight; row > 0; row--) {
        var rowLength = triangle[row].length - 1;
        var newArray = [];
        
        for (var cell = 0; cell < rowLength; cell++) {        
            var currentValue = triangle[row][cell];
            var nextValue    = triangle[row][cell+1];
            var sharedValue  = triangle[row-1][cell];
            
            var maxValue =  maxSum(currentValue, nextValue, sharedValue);
            
            newArray.push(maxValue);
            
        }
        triangle.pop();
        triangle.pop();
        triangle.push(newArray);
    }
    return triangle[0][0];
}

function parseTextToTriangle(err, text) {
    
    if (err) throw err;

    var lines = text.split('\n');
    lines.pop(); // remove extraneous last row
    var numbers = lines.map(function(a) {
        var pairs = a.split(' ');
        return pairs.map(function(b) {if (b != '') return Number(b);})
    });
    return numbers;
}

function parseFileThenFindMaxPath(err, data) {
    
    if (err) throw err;

    var tri = parseTextToTriangle(err, data);
    var answer = maxPath(tri);
    console.log(answer);
}

var answer = fs.readFile(fileName, 'utf8', parseFileThenFindMaxPath);
