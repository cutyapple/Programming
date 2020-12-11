// const fs = require('fs');
// const [a, b, c] = fs.readFileSync('/dev/stdin').toString().split("\n").map(str => str.split(" ").map(text => Number(text)));

const [a, b, c] = `9 0 0 18 0 0
9 0 1 18 0 0
12 14 52 12 15 30`
	.split('\n')
	.map((str) => str.split(' ').map((text) => Number(text)));

function timeCalc(h, m, s, hh, mm, ss) {
	let [hour, minute, second] = [hh - h, mm - m, ss - s];

	second < 0 && (minute--, (second += 60));
	minute < 0 && (hour--, (minute += 60));

	return [hour, minute, second];
}

[a, b, c]
	.map((arr) => timeCalc(...arr))
	.forEach((arr) => {
		console.log(arr.join(' '));
	});
