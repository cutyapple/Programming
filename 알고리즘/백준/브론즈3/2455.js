// const fs = require('fs');
// const [a, b, c, d] = fs.readFileSync('/dev/stdin').toString().split("\n").map(str => str.split(" ").map(text => Number(text)));

const [a, b, c, d] = `0 32
3 13
28 25
39 0`
	.split('\n')
	.map((str) => str.split(' ').map((text) => Number(text)));

console.log(
	[a, b, c, d].reduce(
		(pre, cur) => {
			const first =
				pre[0] < pre[1] + cur[1] - cur[0] ? pre[1] + cur[1] - cur[0] : pre[0];
			return [first, pre[1] + cur[1] - cur[0]];
		},
		[0, 0],
	)[0],
);
