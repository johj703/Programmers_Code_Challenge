// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 문자열로 저장
let input = require("fs").readFileSync(file).toString();

// 3. 입력값을 공백으로 분리하여 숫자 배열로 변환
// [a, b, c, d, e, f] 형태로 저장
const arr = input.split(" ").map(Number);

// 4. x와 y의 가능한 모든 값을 브루트 포스로 검사
// x 범위: -999 이상 999 이하
for (let x = -999; x < 1000; x++) {
  // y 범위: -999 이상 999이하
  for (let y = -999; y < 1000; y++) {
    // 5. 두 연립방적식을 동시에 만족하는지 확인
    if (
      // ax + by = c
      arr[0] * x + arr[1] * y === arr[2] &&
      // dx + ey = f
      arr[3] * x + arr[4] * y === arr[5]
    ) {
      // 6. 조건을 만족하는 x, y 출력
      console.log(x, y);
    }
  }
}
