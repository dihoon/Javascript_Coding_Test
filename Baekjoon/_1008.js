// A/B
// https://www.acmicpc.net/problem/1008

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a/b);