// const fs = require('fs');
// const [a, b, c] = fs.readFileSync('/dev/stdin').toString().split("\n").map(str => str.split(" ").map(text => Number(text)));

const [a, b, c] = `30 20
10 10
10 20`
	.split('\n')
	.map((str) => str.split(' ').map((text) => Number(text)));

let text = '';

for (let i = 0; i < 2; i++) {
	if (a[i] === b[i]) {
		text += c[i];
	} else if (a[i] === c[i]) {
		text += b[i];
	} else {
		text += a[i];
	}
	text += ' ';
}
console.log(text.trim());
