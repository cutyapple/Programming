// const fs = require('fs');
// const [r, c, n] = fs.readFileSync('/dev/stdin').toString().split(" ").map(text => Number(text));

const [r, c, n] = `7 9 3`.split(' ').map((text) => Number(text));

console.log(Math.ceil(r / n) * Math.ceil(c / n));
