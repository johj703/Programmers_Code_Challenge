const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const n = Number(input);

// 첫 번째 줄부터 n번째 줄까지 반복
for(i = 1; i <= input; i++){
    // 각 줄마다 i개의 별을 출력
    // "*".repeat(i)로 별을 i개만큼 반복해서 생성
    console.log("*".repeat(i));
}