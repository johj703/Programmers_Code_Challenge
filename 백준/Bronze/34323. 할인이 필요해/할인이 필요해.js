// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const [N, M, S] = require('fs')
    .readFileSync(file)
    .toString()
    .trim()
    .split(' ')
    .map(Number);

/*
    N: 무인 운영 시간 할인율(%)
    M: M+1 할인에서 M(M개 사면 1개 무료)
    S: 상품 하나의 가격
*/

// ===== 두 할인 방식의 금액 계산 =====
// 총 구매 상품 개수: M+1개

/* 
    방식1:  N% 할인 적용
    (M + 1)개 전체에 N% 할인 적용
    소수점 버림
*/
const discountPrice = Math.floor(((M + 1) * S * (100 - N)) / 100);

/* 
    방식2: M + 1 할인 적용
    M개 가격만 지불(1개 무료)
*/
const freeOnePrice = M * S;

// ===== 더 저렴한 방식 선택 =====
const result = Math.min(discountPrice, freeOnePrice);

// ===== 결과 출력 =====
console.log(result);
