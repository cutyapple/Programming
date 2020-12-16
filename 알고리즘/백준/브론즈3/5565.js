// const fs = require('fs');
// const [sum, ...arr] = fs.readFileSync('/dev/stdin').toString().split("\n").map(text => Number(text));

const [sum, ...arr] = `9850
1050
800
420
380
600
820
2400
1800
980`
	.split('\n')
	.map((text) => Number(text));

console.log(sum - arr.reduce((pre, cur) => pre + cur));
