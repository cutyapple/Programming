const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', function (input) {
	const arr = [];
	input = Number(input);

	arr[1] = 1;

	for (let i = 2; i <= input; i++) {
		const isEven = i % 2 ? -1 : 1;
		arr[i] = arr[i - 1] * 2 + isEven;
	}

	console.log(arr[input]);

	rl.close();
}).on('close', function () {
	process.exit();
});
