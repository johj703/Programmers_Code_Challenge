// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, 앞 뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// ===== 총 잃은 돈 계산 =====
let totalLoss = 0; // 윤성이가 잃은 총 금액 초기화

// 입력된 모든 값을 순회하며 처리
for (let i = 0; i < input.length; i++) {
  // -1이 나오면 윤성이가 자리를 뜬 것이므로 반복 종료
  if (input[i] === -1) {
    break;
  }

  // 해당 판에서 베팅한 돈을 총 손실액에 누적
  // 윤성이는 단 한번도 공의 위치를 찾지 못했으므로 베팅한 돈은 모두 잃음
  // 예: 1 + 2 + 3 + ... + 10 = 55
  totalLoss += input[i];
}

// ===== 결과 출력 =====
// 윤성이가 도박판에서 버린 돈의 총합 출력
console.log(totalLoss);
