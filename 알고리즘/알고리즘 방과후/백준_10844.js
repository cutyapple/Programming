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

	console.log(arr);
	process.exit();
});
