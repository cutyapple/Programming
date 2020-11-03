let arr = [];

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', function (input) {
	input = Number(input);
x
	for (let i = 1; i <= input; i++) {
		arr[i] = getNum(i);
	}

	console.log(arr[input] % 10007);

	rl.close();
}).on('close', function () {
	process.exit();
});

function getNum(input) {
	if (input === 1) return 1;
	if (input === 2) return 2;

	return arr[input - 1] + arr[input - 2];
}
