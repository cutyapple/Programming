// const fs = require('fs');
// const arr = fs.readFileSync('/dev/stdin').toString().split("\n").map(str => str.split(" ").map(text => Number(text)));

// const arr = `10 8 6
// 25 52 60
// 5 12 13
// 0 0 0`
// 	.split('\n')
// 	.map((str) => str.split(' ').map((text) => Number(text)));

// arr.pop();

// console.log(
// 	arr
// 		.map((str) => {
// 			str.sort((x, y) => x - y);
// 			return Math.pow(str[0], 2) + Math.pow(str[1], 2) === Math.pow(str[2], 2)
// 				? 'right'
// 				: 'wrong';
// 		})
// 		.join('\n'),
// );

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const input = ['6 8 10', '25 52 60', '5 12 13', '5 4 3', '0 0 0'];

for (let sides of input) {
	const strToInt = sides
		.split(' ')
		.map((num) => Math.pow(parseInt(num), 2))
		.sort((a, b) => a - b);
	const firstSidePow = strToInt.shift();
	const secondSidePow = strToInt.shift();
	const thirdSidePow = strToInt.shift();
	if (firstSidePow === 0 && secondSidePow === 0 && thirdSidePow === 0) {
		break;
	}
	if (firstSidePow + secondSidePow === thirdSidePow) {
		console.log('right');
	} else {
		console.log('wrong');
	}
}
