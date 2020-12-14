// const fs = require('fs');
// const [t, ...arr] = fs.readFileSync('/dev/stdin').toString().split('\n').map((str) => str.split(' ').map((text) => Number(text)));

// const [t, ...arr] = `2
// 6 12 10
// 30 50 72`
// 	.split('\n')
// 	.map((str) => str.split(' ').map((text) => Number(text)));

// console.log(
// 	arr
// 		.map(
// 			(nums) =>
// 				String(nums[2] % nums[0] === 0 ? nums[0] : nums[2] % nums[0]) +
// 				(Math.ceil(nums[2] / nums[0]) < 10
// 					? `0${Math.ceil(nums[2] / nums[0])}`
// 					: String(Math.ceil(nums[2] / nums[0]))),
// 		)
// 		.join('\n'),
// );

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test
const input = `2
6 12 10
30 50 72`
	.trim()
	.split('\n');
const T = Number(input.shift());

for (let i = 0; i < T; i++) {
	const HWN = input[i].split(' ');
	let H = Number(HWN.shift());
	HWN.shift();
	let N = Number(HWN.shift());

	const floor = N % H === 0 ? H : N % H;
	const roomNum = Number.isInteger(N / H) ? N / H : Math.ceil(N / H);

	if (roomNum < 10) {
		console.log(`${floor}0${roomNum}`);
	} else {
		console.log(`${floor}${roomNum}`);
	}
}
