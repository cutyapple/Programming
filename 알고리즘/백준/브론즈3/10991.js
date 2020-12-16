// const fs = require('fs');
// const n = Number(fs.readFileSync('/dev/stdin').toString())

const n = 4;

for (let i = 1; i <= n; i++) {
	let text = '';
	for (let j = 0; j < n - i; j++) {
		text += ' ';
	}
	for (let j = 0; j < i; j++) {
		text += '* ';
	}
	console.log(text);
}
