const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim();

// 입력 받은 문자열을 숫자로 변환
const num = Number(inputData);

// 1부터 9까지 반복하여 구구단 출력
for(let i = 1; i <= 9; i++){
    // N * i = (결과) 형식으로 구구단 출력
    // 공백 없이 출력
    console.log(`${num} * ${i} = ${num * i}`);
}