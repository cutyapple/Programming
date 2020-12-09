// const fs = require('fs');
// const [N, T, C, P] = fs.readFileSync('/dev/stdin').toString().split(" ");

const [N, T, C, P] = [60, 10, 300, 1000];

console.log(parseInt((N - 1) / T) * C * P);
