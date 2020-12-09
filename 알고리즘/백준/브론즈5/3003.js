// const fs = require('fs');
// const numbers = fs.readFileSync('/dev/stdin').toString().split(" ");

const numbers = [0, 1, 2, 2, 2, 7];
const constNum = [1, 1, 2, 2, 2, 8];

console.log(
	numbers
		.map((number, index) => constNum[index] - number)
		.toString()
		.split(',')
		.join(' '),
);
