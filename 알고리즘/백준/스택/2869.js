// const fs = require('fs');
// const input = fs
// 	.readFileSync('/dev/stdin')
// 	.toString()
// 	.trim()
// 	.split(' ')
// 	.map((num) => Number(num));

const input = [2, 1, 5];

const [A, B, V] = input;

console.log(Math.ceil((V - B) / (A - B)));
