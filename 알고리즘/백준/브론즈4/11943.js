// const fs = require('fs');
// const [[AApple, AOrange], [BApple, BOrange]] = fs.readFileSync('/dev/stdin').toString().split("\n").map(str => str.split(" ").map(text => Number(text)));

const [[AApple, AOrange], [BApple, BOrange]] = `1 2
3 4`
	.split('\n')
	.map((str) => str.split(' ').map((text) => Number(text)));

console.log(
	AApple + BOrange < AOrange + BApple ? AApple + BOrange : AOrange + BApple,
);
