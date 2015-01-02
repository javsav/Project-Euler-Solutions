#!/usr/bin/env node

/* 
Project Euler Solutions
Problem 22
*/

var euler = require('./euler.js');
var fs = require('fs');
var fileName = '../shared_resources/p022_names.txt'
console.log(fileName);

function parseText(err, text) {
    
    if (err) throw err;

// Remove leading '""' character
    text = text.slice(1,text.length-1);
    var names = text.split('","').sort();
    
    function sumName(name) {
        var letters = name.split('');
        var numbers = [];
        for (var i = 0; i < name.length; i++) {
            numbers.push(name.charCodeAt(i) - 64);
        }
        return euler.sum(numbers);
    }

    var nameScores = [];
    
    for (var i = 0; i < names.length; i++) {
        nameScores.push((i + 1) * sumName(names[i]));
    }
    console.log(euler.sum(nameScores));

}



var answer = fs.readFile(fileName, 'ascii', parseText);

