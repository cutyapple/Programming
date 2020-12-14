// const fs = require('fs');
// const n = Number(fs.readFileSync('/dev/stdin').toString())

const n = 5;

for (let i = 1; i <= n; i++) {
	let text = '';
	for (let j = 0; j < n - i; j++) {
		text += ' ';
	}
	for (let j = 0; j < 2 * i - 1; j++) {
		text += '*';
	}
	console.log(text);
}

for (let i = n - 1; i >= 1; i--) {
	let text = '';
	for (let j = n - i; j > 0; j--) {
		text += ' ';
	}
	for (let j = 2 * i - 1; j > 0; j--) {
		text += '*';
	}
	console.log(text);
}
