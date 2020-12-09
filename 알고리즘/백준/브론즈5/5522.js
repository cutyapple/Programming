// const fs = require('fs');
// const numbers = fs.readFileSync('/dev/stdin').toString().split("\n");

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.reduce((cur, pre) => Number(cur) + Number(pre)));
