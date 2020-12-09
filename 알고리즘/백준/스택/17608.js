// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// const input = [6, 6, 9, 7, 6, 4, 6];
const input = [5, 5, 4, 3, 2, 1];

const count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
	if (input[i] !== '') {
		numbers.push(input[i]);
	}
}

let top = 0;
let stack = [];
for (let i = 0; i < count; i++) {
	while (top != 0 && stack[top - 1] <= numbers[i]) {
		top--;
	}

	stack[top++] = numbers[i];
}

console.log(top);
