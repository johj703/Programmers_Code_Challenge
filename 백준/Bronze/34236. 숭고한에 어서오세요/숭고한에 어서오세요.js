// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// N: 대회가 열린 연도의 개수
const N = Number(input[0]);

// years: 대회가 열린 연도들(등차수열)
const years = input[1].split(' ').map(Number);

// ===== 공차(주기) 계산 =====
/*
    등차수열의 공차 = 두 번째 항 - 첫 번째 항
    예: [2014, 2017, 2020] -> 2017 - 2014 = 3
*/
const commonDifference = years[1] - years[0];

// ===== 다음 대회 년도 예측 =====
/*
    마지막 년도 + 공차
    예: 2020 + 3 = 2023
*/
const nextYear = years[N - 1] + commonDifference;

// ===== 결과 출력 =====
console.log(nextYear);
