// const fs = require('fs');
// const numbers = fs.readFileSync('/dev/stdin').toString().split(' ');

const numbers = [0, 4, 2, 5, 6];

console.log(
	numbers.reduce((pre, cur) => {
		return pre + Math.pow(cur, 2);
	}, 0) % 10,
);
