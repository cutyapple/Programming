// const fs = require('fs');
// const arr = fs.readFileSync('/dev/stdin').toString().split(" ").map(text => Number(text));

let arr = [3, 4, 5];
let count = 0;

while (arr[0] + 2 !== arr[2]) {
	count++;
	if (arr[1] - arr[0] < arr[2] - arr[1]) {
		arr[0] = arr[2] - 1;
	} else {
		arr[2] = arr[0] + 1;
	}

	arr.sort((x, y) => x - y);
}

console.log(count);
