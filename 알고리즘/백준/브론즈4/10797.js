// const fs = require('fs');
// const [day, numArr] = fs.readFileSync('/dev/stdin').toString().split("\n");

const [day, numArr] = [1, ['1 2 3 4 5']];

console.log(numArr.split(' ').filter((num) => num == day).length);
