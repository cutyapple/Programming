// const fs = require('fs');
// const [A, B, C, D, P] = fs.readFileSync('/dev/stdin').toString().split("\n").map(text => Number(text));

const [A, B, C, D, P] = [8, 300, 100, 10, 250];

console.log(
	P * A < B + (P - C < 0 ? 0 : P - C) * D
		? P * A
		: B + (P - C < 0 ? 0 : P - C) * D,
);
