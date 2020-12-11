// const fs = require('fs');
// const N = fs.readFileSync('/dev/stdin').toString();

const N = 3;
let count = 2;

for (let i = 2; i <= N; i++) {
	count += Math.ceil((i + 1) / 2);
}
console.log(count);
