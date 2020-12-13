// const fs = require('fs');
// const [a, b, c, d, e] = fs.readFileSync('/dev/stdin').toString().split("\n").map(text => Number(text));

const [a, b, c, d, e] = `35
92
31
50
11`
	.split('\n')
	.map((text) => Number(text));

console.log(a < 0 ? -a * c + d + b * e : (b - a) * e);
