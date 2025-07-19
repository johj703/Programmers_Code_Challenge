const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 입력된 모든 줄을 순서대로 처리(EOF까지 모든 입력을 처리)
// EOF: End Of File = 파일의 끝
for(let i = 0; i < inputData.length; i++){
    // 현재 줄을 공백으로 분리하여 A, B를 숫자 배열로 변환
    let data = inputData[i].split(' ').map(Number);
    // A + B 결과 출력(data[0]: A, data[1]: B)
    console.log(data[0] + data[1]);
}