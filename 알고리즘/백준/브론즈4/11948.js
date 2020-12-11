// const fs = require('fs');
// const [a, b, c, d, e, f] = fs.readFileSync('/dev/stdin').toString().split("\n").map(text => Number(text));

const [a, b, c, d, e, f] = `15
21
15
42
15
62`
	.split('\n')
	.map((text) => Number(text));

console.log(
	[a, b, c, d]
		.sort((x, y) => x - y)
		.reduce((pre, cur, index) => index && pre + cur, 0) + (e > f ? e : f),
);
