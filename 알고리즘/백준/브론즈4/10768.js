// const fs = require('fs');
// const [month, day] = fs.readFileSync('/dev/stdin').toString().split("\n").map(text => Number(text));

const [month, day] = `1 19`.split(' ').map((text) => Number(text));

console.log(
	month > 2
		? 'After'
		: month === 2
		? day === 18
			? 'Special'
			: day > 18
			? 'After'
			: 'Before'
		: 'Before',
);
