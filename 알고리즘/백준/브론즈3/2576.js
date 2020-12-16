// const fs = require('fs');
// const arr = fs.readFileSync('/dev/stdin').toString().split("\n").map(text => Number(text));

const arr = `12
77
38
41
53
92
85`
	.split('\n')
	.map((text) => Number(text));

console.log(
	~arr.findIndex((num) => num % 2 === 1)
		? `${arr
				.filter((num) => num % 2 === 1)
				.reduce((pre, cur) => pre + cur)}\n${Math.min(
				...arr.filter((num) => num % 2 === 1),
		  )}`
		: -1,
);
