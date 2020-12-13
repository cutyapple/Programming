// const fs = require('fs');
// const [a, b, c, d] = fs.readFileSync('/dev/stdin').toString().split(" ").map(text => Number(text));

const [a, b, c, d] = `0 0 1 1000`.split(' ').map((text) => Number(text));

console.log(Math.abs(a + d - (b + c)));
