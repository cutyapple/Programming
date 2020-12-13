// const fs = require('fs');
// const [a, b, c] = fs.readFileSync('/dev/stdin').toString().split(" ").map(text => Number(text));

const [a, b, c] = `32 16 8`.split(' ').map((text) => Number(text));

const exData = [
	{
		a: 4,
		b: 3,
		c: 5,
	},
	{
		a: 2,
		b: 100,
		c: 2,
	},
	{
		a: 2,
		b: 2,
		c: 100,
	},
	{
		a: 2,
		b: 100,
		c: 2,
	},
	{
		a: 100,
		b: 2,
		c: 2,
	},
	{
		a: 100,
		b: 2,
		c: 2,
	},
];

for (let ex of exData) {
	let { a, b, c } = ex;
	console.log(
		parseInt(
			a >= b && a >= c
				? b >= c
					? (a * b) / c
					: (a / b) * c
				: b >= a && b >= c
				? (a * b) / c
				: (a / b) * c,
		),
	);
}

// console.log(
// 	a >= b && a >= c
// 		? b >= c
// 			? (a * b) / c
// 			: (a / b) * c
// 		: b >= a && b >= c
// 		? (a * b) / c
// 		: (a / b) * c,
// );
