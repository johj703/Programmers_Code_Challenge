// Node.js의 fs 모듈 불러오기
const fs = require('fs');

// 표준 입력에서 모든 데이터 읽어와서 줄 단위로 분리
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄에서 테스트 케이스 개수 T 추출
const T = Number(input[0]);

// T개의 테스트 케이스를 순회하며 처리
for(let i = 1; i <= T; i++){
    // 각 줄에서 A, B 추출(공백으로 분리 후 숫자 변환)
    const [a, b] = input[i].split(' ').map(Number);
    
    // A + B 결과 출력
    console.log(a + b);
}