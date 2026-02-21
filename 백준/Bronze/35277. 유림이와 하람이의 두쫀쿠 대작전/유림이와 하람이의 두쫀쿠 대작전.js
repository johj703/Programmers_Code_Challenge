// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const N = Number(require('fs').readFileSync(file).toString().trim());

// N: 유림이와 하람이가 가지고 있는 돈(원)

// ===== 두바이 쫀득 쿠키 1개당 재료비 계산 ======
const costPerCookie = 900 + 60 + 600 + 170 + 160 + 110; // 2000원

/*
    * 구운 카다이프: 900원
    * 버터: 60원
    * 피스타치오 스프레드: 600원
    * 화이트 초콜릿: 170원
    * 마시멜로: 160원
    * 코코아 파우더: 110원
    ------------------------------
    총: 2000원
*/

// ===== 최대 만들 수 있는 쿠키 개수 계산 =====
// N원으로 2000원짜리 쿠키를 몇 개 만들 수 있는지
const maxCookies = Math.floor(N / costPerCookie);

// ===== 결과 출력 =====
console.log(maxCookies);
