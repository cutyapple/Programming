// const fs = require('fs');
// const [n, w, h, l] = fs.readFileSync('/dev/stdin').toString().split(" ").map(text => Number(text));

const [n, w, h, l] = `7 17 11 5`.split(' ').map((text) => Number(text));

console.log(
	n < parseInt(w / l) * parseInt(h / l) ? n : parseInt(w / l) * parseInt(h / l),
);
