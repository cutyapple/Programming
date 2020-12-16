// const fs = require('fs');
// const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().split('\n').map((text) => Number(text));

const [n, ...arr] = `3
1
1
1
`
	.split('\n')
	.map((text) => Number(text));

console.log(arr.reduce((pre, cur) => pre + cur, 0) - n + 1);
