// const fs = require('fs');
// const [a, b, c] = fs.readFileSync('/dev/stdin').toString().split(" ").map(text => Number(text));

const [a, b, c] = `52 9 16`.split(' ').map((text) => Number(text));

console.log(
	parseInt((b * a) / Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2))),
	parseInt((c * a) / Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2))),
);
