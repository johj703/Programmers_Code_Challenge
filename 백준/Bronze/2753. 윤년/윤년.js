const fs = require('fs');

const inputData = fs.readFileSync('/dev/stdin').toString();

const year = Number(inputData);

// 윤년 판별 로직: 두 가지 조건 중 하나라도 만족하면 윤년
// 조건 1: 4의 배수이면서 동시에 100의 배수가 아닌 경우
// 조건 2: 400의 배수인 경우
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    // 윤년
    console.log(1);
} else {
    // 평년
    console.log(0);
}