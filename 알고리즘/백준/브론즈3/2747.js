// const fs = require('fs');
// const n = Number(fs.readFileSync('/dev/stdin').toString())

const n = 17;

function fibo(n) {
	if (n <= 1) return n;

	return arr[n - 1] + arr[n - 2];
}

let arr = [0, 1];
for (let i = 2; i <= n; i++) {
	arr[i] = fibo(i);
}
console.log(arr[n]);
