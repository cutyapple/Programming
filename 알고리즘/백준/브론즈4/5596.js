// const fs = require('fs');
// const [arrA, arrB] = fs.readFileSync('/dev/stdin').toString().split("\n").map(str => str.split(" ").map(text => Number(text)));

const [arrA, arrB] = `100 80 70 60
80 70 80 90`
	.split('\n')
	.map((str) => str.split(' ').map((text) => Number(text)));

console.log(
	arrA.reduce((pre, cur) => pre + cur) >= arrB.reduce((pre, cur) => pre + cur)
		? arrA.reduce((pre, cur) => pre + cur)
		: arrB.reduce((pre, cur) => pre + cur),
);
