// const fs = require('fs');
// const [L, A, B, C, D] = fs.readFileSync('/dev/stdin').toString().split("\n").map(text => Number(text));

const [L, A, B, C, D] = [20, 25, 30, 6, 8];

console.log(
	L -
		(Math.ceil(A / C) > Math.ceil(B / D) ? Math.ceil(A / C) : Math.ceil(B / D)),
);
