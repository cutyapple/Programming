// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ['2', '6 12 10', '30 50 72'];

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
	const HWN = input[i].split(' ');
	const H = HWN.shift();
	const W = HWN.shift();
	const N = HWN.shift();

	const XX =
		(parseInt(N / H) + 1).length === 1
			? String(parseInt(N / H) + 1)
			: `0${String(parseInt(N / H) + 1)}`;
	const YY = N % H;

	console.log(`${YY}${XX}`);
}
