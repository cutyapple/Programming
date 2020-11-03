let arr = [];

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', function (input) {
	input = Number(input);

	for (let i = 1; i <= input; i++) {
		arr[i] = getNum(i);
	}

	console.log(arr[input]);

	rl.close();
}).on('close', function () {
	process.exit();
});

function getNum(input) {
	if (input === 1) return 0;
	if (input % 2 === 0) {
		if (arr[input - 1] < arr[input / 2]) {
			return arr[input - 1] + 1;
		}
		return arr[input / 2] + 1;
	}
	if (input % 3 === 0) {
		if (arr[input - 1] < arr[input / 3]) {
			return arr[input - 1] + 1;
		}
		return arr[input / 3] + 1;
	}
	return arr[input - 1] + 1;
}
