// const fs = require('fs');
// const [s, t, d] = fs.readFileSync('/dev/stdin').toString().split(" ").map(text => Number(text));

const [s, t, d] = `50 75 200`.split(' ').map((text) => Number(text));

console.log((d / (2 * s)) * t);
