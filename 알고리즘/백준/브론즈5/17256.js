// const fs = require('fs');
// const [aNum, cNum] = fs.readFileSync('/dev/stdin').toString().split("\n").map(ele => ele.split(" ").map(n => Number(n)));

const [aNum, cNum] = [
	[15, 16, 17],
	[19, 32, 90],
];

console.log(cNum[0] - aNum[2], cNum[1] / aNum[1], cNum[2] - aNum[0]);
