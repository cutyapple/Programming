// const fs = require('fs');
// const [d1, d2] = fs.readFileSync('/dev/stdin').toString().split("\n").map(text => Number(text));

const [d1, d2] = `13
8`
	.split('\n')
	.map((text) => Number(text));

console.log((d1 * 2 + 2 * 3.141592 * d2).toFixed(6));
