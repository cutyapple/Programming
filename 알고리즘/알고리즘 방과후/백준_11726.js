const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', function (input) {
	const arr = [];
	input = Number(input);

	arr[1] = 1;
	arr[2] = 2;

	for (let i = 3; i <= input; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
	}

	console.log(arr[input]);

	rl.close();
}).on('close', function () {
	process.exit();
});
