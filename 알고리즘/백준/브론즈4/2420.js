// const fs = require('fs');
// const [[h, m, s], needNum] = fs.readFileSync('/dev/stdin').toString().split("\n").map(str => str.split(" "));

const [[h, m, s], needNum] = [['0', '0', '0'], '3599'];

console.log(
	parseInt((60 * 60 * h + 60 * m + +s + +needNum) / 60 / 60) % 24,
	parseInt((60 * m + +s + +needNum) / 60) % 60,
	(s + +needNum) % 60,
);
