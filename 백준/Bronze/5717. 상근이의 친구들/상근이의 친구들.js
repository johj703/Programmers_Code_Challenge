// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 줄바꿈으로 분리
// 스프레드 연산자로 배열 복사
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// ===== 친구 수 계산 =====
// 각 테스트케이스 처리
for (let i = 0; i < input.length; i++) {
  // 남자 친구 수와 여자 친구 수 추출
  const [m, f] = input[i].split(" ").map(Number);

  // 0 0이면 종료(명시적 체크)
  if (m === 0 && f === 0) break;

  // 총 친구 수 출력
  console.log(m + f);
}