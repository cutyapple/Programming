// const fs = require('fs');
// const numbers = fs.readFileSync('/dev/stdin').toString().split("\n");

const numbers = [31, 34, 7, 151];

console.log(
	`${parseInt(numbers.reduce((pre, cur) => pre + cur, 0) / 60)}\n${
		numbers.reduce((pre, cur) => pre + cur, 0) -
		parseInt(numbers.reduce((pre, cur) => pre + cur, 0) / 60) * 60
	}`,
);
