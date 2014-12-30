#!/usr/bin/env node

/* 
Project Euler Solutions
Problem 18
*/

var tri = [
     [75]
    ,[95, 64]
    ,[17, 47, 82]
    ,[18, 35, 87, 10]
    ,[20, 4, 82, 47, 65]
    ,[19, 1, 23, 75, 3, 34]
    ,[88, 2, 77, 73, 7, 63, 67]
    ,[99, 65, 4, 28, 6, 16, 70, 92]
    ,[41, 41, 26, 56, 83, 40, 80, 70, 33]
    ,[41, 48, 72, 33, 47, 32, 37, 16, 94, 29]
    ,[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14]
    ,[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57]
    ,[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 4]
    ,[63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31]
    ,[4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
    ];

function max_sum(one, two, shared) {
    var a = one + shared;
    var b = two + shared;
    return Math.max(a, b);
}

function max_path(triangle) {

    var triangle_height = triangle.length - 1;

    for (var row = triangle_height; row > 0; row--) {
        var row_length = triangle[row].length - 1;
        var new_array = [];
        
        for (var cell = 0; cell < row_length; cell++) {        
            var current_value = triangle[row][cell];
            var next_value    = triangle[row][cell+1];
            var shared_value  = triangle[row-1][cell];
            
            var max_value =  max_sum(current_value, next_value, shared_value);
            
            new_array.push(max_value);
            
        }
        triangle.pop();
        triangle.pop();
        triangle.push(new_array);
    }
    return triangle[0][0];
}

console.log(max_path(tri));