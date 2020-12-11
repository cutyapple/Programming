// const fs = require('fs');
// const T = fs.readFileSync('/dev/stdin').toString();

const T = 234;

T % 10 !== 0
	? console.log(-1)
	: console.log(
			parseInt(T / 300),
			parseInt((T - parseInt(T / 300) * 300) / 60) % 60,
			parseInt((T - parseInt((T - parseInt(T / 300) * 300) / 60) * 60) / 10) %
				10,
	  );
