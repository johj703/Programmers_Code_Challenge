// ===== 입력 처리 =====
// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// ===== 데이터 파싱 =====
// 상근이가 가진 카드의 개수
const n = +input[0];

// 상근이가 가진 카드들을 숫자로 변환하고 정렬(이진 탐색을 위해 필수)
const cards = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

// 확인해야 할 숫자 배열
const targets = input[3].split(" ").map(Number);

// ===== 이진 탐색 함수 =====
// start: 탐색 범위의 시작 index
// end: 탐색 범위의 끝 index
// target: 찾으려는 숫자
const bs = (start, end, target) => {
  // Base Case: 탐색 범위가 유효하지 않으면 못 찾은 것 -> 0 반환
  if (start > end) return 0;

  // 탐색 범위의 중간 index 계산
  const mid = Math.floor((start + end) / 2);

  // 중간 값이 목표 값과 일치하면 찾은 것 -> 1 반환
  if (target === cards[mid]) return 1;
  // 목표 값이 중간 값보다 크면 오른쪽 절반 탐색
  else if (target > cards[mid]) {
    return bs(mid + 1, end, target);
  }
  // 목표 값이 중간 값보다 작으면 왼쪽 절반 탐색
  else {
    return bs(start, mid - 1, target);
  }
};

// ===== 결과 계산 및 출력 =====
let result = [];

// 각 target에 대해 이진 탐색 수행 후 결과 저장
for (const target of targets) {
  result.push(bs(0, n - 1, target));
}

// 결과를 공백으로 구분하여 한 줄로 출력
console.log(result.join(" "));
