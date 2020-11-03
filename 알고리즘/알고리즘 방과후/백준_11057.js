const { count } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	const num = Number(input[0]);
	let arr = Array.from(Array(num + 1), () => Array(num + 1).fill(0));
	// const list = input[1].split(' ').map((el) => Number(el));

	// arr[1][0] = '0';

	for (let i = 2; i <= num; i++) {
		arr[1][i] = 1;
	}
	console.log(arr);

	for (let i = 2; i <= num; i++) {
		for (let j = 1; j <= num; j++) {
			let sum = 0;
			for (let k = 1; k <= j; k++) {
				sum += arr[i - 1][k];
			}
			arr[i][j] = sum;
		}
	}

	console.log(arr);
	process.exit();
});
