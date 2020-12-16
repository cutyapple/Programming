// const fs = require('fs');
// let  arr = fs.readFileSync('/dev/stdin').toString().split("\n").map(str => str.split(" ").map(text => Number(text)));

let arr = `8 16
32 4
17 5
0 0`
	.split('\n')
	.map((str) => str.split(' ').map((text) => Number(text)));

arr.pop();

console.log(
	arr
		.map((numArr) =>
			numArr[0] % numArr[1] === 0
				? 'multiple'
				: numArr[1] % numArr[0] === 0
				? 'factor'
				: 'neither',
		)
		.join('\n'),
);
