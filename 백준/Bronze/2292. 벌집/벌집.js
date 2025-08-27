// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽고 숫자로 변환
let input = require("fs").readFileSync(file).toString().trim();

// 3. 벌집의 층을 계산하는 재귀 함수
// 재귀 함수: 자기 자신을 호출하는 함수(리턴 값을 사용하지 않더라도 자기 자신을 호출하면 재귀 함수다!)
// 재귀 함수의 핵심 요소 = 자기 자신 호출(필수), 종료 조건(무한 루프 방지), 상태 변경(매번 다른 인자로 호출)
const count_layer = (min, layer) => {
  // 현재 층의 마지막 방 번호 계산
  max = min + layer * 6 - 1;
  layer++;

  if (input > max) {
    // 다음 층으로 이동
    count_layer(max + 1, layer);
  } else {
    // 현재 층에서 답 출력
    console.log(layer);
    return;
  }
};

// 4. 메인 로직
if (Number(input) === 1) {
  // 중앙 방은 1번만 지나감
  console.log(1);
} else {
  // 2번 방부터 1층으로 시작
  count_layer(2, 1);
}
