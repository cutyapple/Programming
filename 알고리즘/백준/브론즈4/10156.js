// const fs = require('fs');
// const [k, n, m] = fs.readFileSync('/dev/stdin').toString().split(" ");

const [k, n, m] = [300, 4, 1000];

console.log(k * n - m < 0 ? 0 : k * n - m);
