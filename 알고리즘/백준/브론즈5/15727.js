// const fs = require('fs');
// const number = fs.readFileSync('/dev/stdin').toString();

const number = 12;

console.log(number % 5 === 0 ? number / 5 : parseInt(number / 5) + 1);
