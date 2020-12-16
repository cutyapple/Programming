// const fs = require('fs');
// let [n, m, k] = fs.readFileSync('/dev/stdin').toString().split(" ").map(text => Number(text));

let [n, m, k] = `100 10 98`.split(' ').map((text) => Number(text));

while (k !== 0) {
	2 * m < n ? n-- : m--;
	k--;
}

console.log(Math.min(parseInt(n / 2), m));
