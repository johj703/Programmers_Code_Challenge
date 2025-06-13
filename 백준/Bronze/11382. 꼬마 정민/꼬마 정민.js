const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

console.log(a + b + c);