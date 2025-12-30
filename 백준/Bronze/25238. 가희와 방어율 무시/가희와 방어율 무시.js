// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, 앞 뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const [a, b] = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// ===== 체감 방어율 계산 =====
// 체감 방어율 = 몬스터 방어율 × (100 - 방무) / 100
// 예: 방어율 200, 방무 20% -> 200 × 80 / 100 = 160
const effectiveDefense = (a * (100 - b)) / 100;

// ===== 결과 출력 =====
// 체감 방어율이 100 미만이면 대미지를 줄 수 있음(1)
// 체감 방어율이 100 이상이면 대미지를 줄 수 없음(0)
if (effectiveDefense < 100) {
  console.log(1); // 대미지를 줄 수 있음
} else {
  console.log(0); // 대미지를 줄 수 없음
}
