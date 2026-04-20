// ===== 정답 코드 =====
// 시간 복잡도: O(N + M) - Big-O, N개 가격 입력 + M개 코너 번호 입력
// 공간 복잡도: O(N) - Big-O, 가격 배열 저장

// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// N: 메뉴의 개수
const N = Number(input[0]);

// ===== 각 코너의 가격 저장 =====
const prices = [0]; // 0번 Index는 사용하지 않음(1번부터 시작)

for (let i = 1; i <= N; i++) {
    prices.push(Number(input[i].trim()));
}

// M: 새내기 인원수
const M = Number(input[N + 1]);

// ===== 총 결제 금액 계산 =====
let total = 0;

for (let i = N + 2; i < N + 2 + M; i++) {
    const cornerNumber = Number(input[i].trim());
    total += prices[cornerNumber];
}

// ===== 결과 출력 =====
console.log(total);
