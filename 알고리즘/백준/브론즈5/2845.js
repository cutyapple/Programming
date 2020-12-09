// const fs = require('fs');
// const numbers = fs.readFileSync('/dev/stdin').toString().split("\n").map(arr => arr.split(" "));

const numbers = [
	[5, 20],
	[99, 101, 1000, 0, 97],
];

console.log(
	numbers[1]
		.map((num) => {
			return String(num - numbers[0][0] * numbers[0][1]);
		})
		.join(' '),
);
