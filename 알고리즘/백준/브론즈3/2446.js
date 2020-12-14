// const fs = require('fs');
// const n = Number(fs.readFileSync('/dev/stdin').toString())

const n = 5;

for (let i = n; i >= 1; i--) {
	let text = '';
	for (let j = n - i; j > 0; j--) {
		text += ' ';
	}
	for (let j = 2 * i - 1; j > 0; j--) {
		text += '*';
	}
	console.log(text);
}
