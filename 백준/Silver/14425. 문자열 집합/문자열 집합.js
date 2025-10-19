// ===== 입력 처리 =====
// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거 후 줄바꿈으로 분리
let inputs = require("fs").readFileSync(file).toString().trim().split("\n");

//  ===== 데이터 파싱 =====
// 첫 줄에서 N(집합 S의 문자열 개수)과 M(검사할 문자열 개수) 추출
// splice(0, 1)로 첫 줄을 제거하면서 동시에 가져옴
const [n, m] = inputs.splice(0, 1)[0].split(" ").map(Number);

// 다음 N개 줄을 집합 S로 생성( 0(1) 검색을 위해 Set 사용)
// splice(0, n)으로 N개 줄을 제거하면서 동시에 가져옴
const S = new Set(inputs.splice(0, n));

// ===== 결과 계산 =====
// 집합 S에 포함된 문자열의 개수
let answer = 0;

// 나머지 M개 문자열에 대해 집합 S에 포함되는지 확인
for (const input of inputs) {
  // Set.has()는 0(1) 시간 복잡도로 존재 여부 확인
  if (S.has(input)) answer += 1;
}

// ===== 결과 출력 =====
console.log(answer);
