// const fs = require('fs');
// const [birthday, current] = fs.readFileSync('/dev/stdin').toString().split("\n").map(str => str.split(" ").map(text => Number(text)));

const [birthday, current] = `2005 1 2
2007 1 1`
	.split('\n')
	.map((str) => str.split(' ').map((text) => Number(text)));

const [[byear, bmonth, bday], [cyear, cmonth, cday]] = [birthday, current];

console.log(
	cyear -
		byear -
		(cmonth - bmonth < 0 || (cmonth == bmonth && cday - bday < 0) ? 1 : 0),
);

console.log(cyear - byear + 1);

console.log(cyear - byear);
