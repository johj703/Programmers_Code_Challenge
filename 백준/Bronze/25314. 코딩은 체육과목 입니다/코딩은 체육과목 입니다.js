const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

// 입력받은 문자열을 숫자로 변환
const N = parseInt(input);

// N바이트 정수 자료형 이름 생성
let result = '';

// long의 개수 계산: N/4개(혜아의 논리에 따르면)
const longCount = N / 4;

// long을 longCount만큼 반복해서 추가
for(let i = 0; i < longCount; i++){
    result += 'long ';
}

// 마지막 int 추가
result += 'int';

// 결과 출력
console.log(result);