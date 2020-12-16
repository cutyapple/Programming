// const fs = require('fs');
// const [N, arr] = fs.readFileSync('/dev/stdin').toString().split('\n').map((str) => str.split(' ').map((text) => Number(text)));

const [N, arr] = `10
1 0 1 1 1 0 0 1 1 0`
	.toString()
	.split('\n')
	.map((str) => str.split(' ').map((text) => Number(text)));

let sum = 0;
let count = 1;

arr.forEach((num) => {
	if (!!num) {
		sum += num * count++;
	} else {
		count = 1;
	}
});

console.log(sum);
