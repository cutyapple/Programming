// const fs = require('fs');
// const [[h, m], needNum] = fs.readFileSync('/dev/stdin').toString().split("\n").map(str => str.split(" "));;

const [[h, m], needNum] = [['14', '30'], '1000'];

console.log(
	parseInt((60 * h + +m + +needNum) / 60) % 24,
	(60 * h + +m + +needNum) % 60,
);
