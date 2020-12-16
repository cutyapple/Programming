// const fs = require('fs');
// const [n, k] = fs.readFileSync('/dev/stdin').toString().split(" ").map(text => Number(text));

const [n, k] = `6 4`.split(' ').map((text) => Number(text));

let arr = [];
for (let i = 1; i <= n; i++) {
	n % i === 0 && arr.push(i);
}

console.log(arr, arr[k - 1] ? arr[k - 1] : 0);
