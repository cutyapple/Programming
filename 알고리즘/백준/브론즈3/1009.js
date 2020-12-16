// const fs = require('fs');
// const [T, ...arr] = fs.readFileSync('/dev/stdin').toString().split('\n').map((str) => str.split(' ').map((text) => Number(text)));

const [T, ...arr] = `5
1 6
3 7
6 2
99 1000000
9 635`
	.toString()
	.split('\n')
	.map((str) => str.split(' ').map((text) => Number(text)));

const arrr = [
	[10],
	[1],
	[6, 2, 4, 8],
	[1, 3, 9, 7],
	[6, 4],
	[5],
	[6],
	[1, 7, 9, 3],
	[6, 8, 4, 2],
	[1, 9],
];

console.log(
	arr
		.map(
			(numArray) =>
				arrr[numArray[0] % 10][numArray[1] % arrr[numArray[0] % 10].length],
		)
		.join('\n'),
);
