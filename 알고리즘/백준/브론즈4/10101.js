// const fs = require('fs');
// const [a, b, c] = fs.readFileSync('/dev/stdin').toString().split("\n").map(text => Number(text));

const [a, b, c] = [60, 70, 50];

console.log(
	a === b && b === c && c === 60
		? 'Equilateral'
		: a + b + c !== 180
		? 'Error'
		: a !== b && b !== c && c !== a
		? 'Scalene'
		: 'Isosceles',
);
