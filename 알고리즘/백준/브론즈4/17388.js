// const fs = require('fs');
// const [s, k, h] = fs.readFileSync('/dev/stdin').toString().split(" ").map(text => Number(text));

const [s, k, h] = `31 41 59`.split(' ').map((text) => Number(text));

s + k + h >= 100
	? console.log('OK')
	: [s, k, h].forEach((value, index) => {
			Math.min(s, k, h) === value &&
				console.log(['Soongsil', 'Korea', 'Hanyang'][index]);
	  });
