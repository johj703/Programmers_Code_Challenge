// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거
let input = require("fs").readFileSync(file).toString().trim();

// 3. 입력값을 숫자로 변환
const X = Number(input);

// 4. 현재까지 누적된 분수 개수
let limit = 1;

// 5. 현재 대각선 번호 (몇 번째 대각선인지)
let n = 1;

// 6. X번째 분수가 속한 대각선 찾기
while (limit < X) {
  // 다음 대각선의 마지막 번호
  limit += n + 1;
  // 대각선 번호 증가
  n++;
}

// 7. 해당 대각선에서 X번째 분수의 위치 계산
// a: 대각선 내에서 몇 번째인지(1부터 시작)
const a = n - (limit - X);

// 8. 대각선 방향에 따라 분자/분모 결정
if (n % 2 === 0) {
  // 짝수 대각선: 올라가는 방향(분자 증가, 분모 감소)
  console.log(`${a}/${n - a + 1}`);
} else {
  // 홀수 대각선: 내려가는 방향(분자 감소, 분모 증가)
  console.log(`${n - a + 1}/${a}`);
}
