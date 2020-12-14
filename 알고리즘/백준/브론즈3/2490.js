// const fs = require('fs');
// const [a, b, c] = fs.readFileSync('/dev/stdin').toString().split("\n").map(str => str.split(" ").map(text => Number(text)));

const [a, b, c] = `0 1 0 1
1 1 1 0
0 0 1 1`
	.split('\n')
	.map((str) => str.split(' ').map((text) => Number(text)));

const TEXT = ['E', 'A', 'B', 'C', 'D'];

console.log(
	[a, b, c]
		.map((arr) => TEXT[arr.filter((num) => num === 0).length])
		.join('\n'),
);
