// Node.js의 fs 모듈로 표준 입력 읽어와서 줄 단위로 분리
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 첫 번째 줄: 영수증에 적힌 총 금액
let total = +input[0];
// 두 번째 줄: 구매한 물건의 종류 개수
let cnt = +input[1];
// 계산한 총 금액을 저장할 변수
let sum = 0;

// 세 번째 줄부터 (cnt + 1)번째 줄까지 각 물건 정보 처리
for(let i = 2; i <= cnt + 1; ++i){
    // 각 줄을 공백으로 분리하여 [가격, 개수] 배열로 변환
    let newArr = input[i].split(" ").map(item => Number(item));
    // 가격 * 개수를 총합에 누적
    sum += newArr[0] * newArr[1];
}
// 영수증 총 금액과 계산한 총 금액이 일치하는지 확인하여 결과 출력
console.log(total === sum ? "Yes" : "No");