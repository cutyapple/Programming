// const fs = require('fs');
// const [a, b, c] = fs.readFileSync('/dev/stdin').toString().split("\n").map(str => str.split(" ").map(text => Number(text)));

const [a, b, c] = `30 20
10 10
10 20`
	.split('\n')
	.map((str) => str.split(' ').map((text) => Number(text)));

console.log([...a, ...b, ...c].sort((x, y) => x - y).map((num) => num));
