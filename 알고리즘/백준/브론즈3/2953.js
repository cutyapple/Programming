// const fs = require('fs');
// const arr = fs.readFileSync('/dev/stdin').toString().split('\n').map((str) => str.split(' ').map((text) => Number(text)));

const arr = `5 4 4 5
5 4 4 4
5 5 4 4
5 5 5 5
4 4 4 5`
	.split('\n')
	.map((str) => str.split(' ').map((text) => Number(text)));

console.log(
	arr
		.map((numArr) => numArr.reduce((pre, cur) => pre + cur))
		.findIndex(
			(num) =>
				num ===
				Math.max(
					...arr.map((numArr) => numArr.reduce((pre, cur) => pre + cur)),
				),
		) + 1,
	Math.max(...arr.map((numArr) => numArr.reduce((pre, cur) => pre + cur))),
);
