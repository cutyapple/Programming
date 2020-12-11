// const fs = require('fs');
// const numArr = fs.readFileSync('/dev/stdin').toString().split(" ").map(str => +str);

const numArr = [3, 1, 2];

console.log(numArr.sort((a, b) => a - b).join(' '));
