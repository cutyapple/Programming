// const fs = require('fs');
// const [a, b, c, d] = fs.readFileSync('/dev/stdin').toString().split(" ")

const [a, b, c, d] = `10 20 30 40`.split(' ');

console.log(a + b - -(c + d));
