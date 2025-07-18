const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim();

// 입력 데이터를 줄 단위로 분리하여 배열로 저장
const lines = input.split("\n");

// 각 줄을 순서대로 처리(몇 개의 테스트 케이스가 있는지 미리 알 수 없음.)
for (let i = 0; i < lines.length; i++) {
  // 현재 줄에서 A, B를 공백으로 분리하여 숫자로 변환
  const [a, b] = lines[i].split(" ").map(Number);

  // 종료 조건: A와 B가 모두 0이면 프로그램 종료
  if (a === 0 && b === 0) break;
  
  // A + B 결과 출력
  console.log(a + b);
}
