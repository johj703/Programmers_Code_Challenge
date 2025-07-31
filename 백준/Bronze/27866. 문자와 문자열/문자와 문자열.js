const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(file).toString().trim().split("\n");

const S = input[0];
const i = input[1];

console.log(S.slice(i - 1, i));
