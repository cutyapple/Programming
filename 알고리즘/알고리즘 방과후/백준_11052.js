const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let arr = [];
	const num = Number(input[0]);
	const list = input[1].split(' ').map((el) => Number(el));

	// console.log(num);
	// console.log(list);

	for (let i = 0; i <= num; i++) {
		arr[i] = 0;
	}
	// for

	// arr[1] = list[0];

	// arr[2] = Math.max(arr[2-1] + arr[1], list[1]);

	// arr[3] = Math.max(arr[3-1] + arr[1], list[2]);

	for (let i = 1; i <= num; i++) {
		for (let j = 1; j <= i; j++) {
			arr[i] = Math.max(arr[i], arr[i - j] + list[j - 1]);
		}
	}

	// console.log(arr);
	// console.log(input);
	console.log(arr);
	process.exit();
});
