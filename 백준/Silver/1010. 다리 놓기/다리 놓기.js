// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

// ===== 데이터 파싱 =====
// 첫 줄은 테스트케이스 개수(t), 나머지는 각 테스트케이스 데이터
const [t, ...arr] = input;

// ===== 메모이제이션 배열 =====
// dy[n][r] = C(n, r) (n개 중 r개를 선택하는 조합의 수)
// 최대 30x30 크기로 모든 테스트케이스에서 공유
let dy = Array.from(Array(30), () => Array(30).fill(0));

// ===== 조합 계산 함수 (DFS + 메모이제이션) =====
// n: 전체 개수(동쪽 사이트 M개)
// r: 선택할 개수(서쪽 사이트 N개)
// 반환값: C(n, r) = n개 중 r개를 선택하는 경우의 수
function DFS(n, r) {
  // 이미 계산된 값이 있으면 재사용(메모이제이션)
  if (dy[n][r] > 0) return dy[n][r];

  // Base Case 1: 아무것도 선택하지 않는 경우 -> 1가지
  // Base Case 2: 모두 선택하는 경우 -> 1가지
  if (r === 0 || n === r) return 1;
  // Recursive Case: 파스칼의 삼각형 공식
  // C(n, r) = C(n-1, r-1) + C(n-1, r)
  // - C(n-1, r-1): n번째 원소를 선택하는 경우
  // - C(n-1, r): n번째 원소를 선택하지 않는 경우
  else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
}

// ===== 각 테스트케이스 처리 =====
function solution(m, n) {
  // m개(동쪽) 중 n개(서쪽)를 선택하는 조합 계산
  const answer = DFS(m, n);
  console.log(answer);
}

// 모든 테스트케이스에 대해 solution 실행
// split(" ")[0]: N (서쪽 사이트)
// split(" ")[1]: M (동쪽 사이트)
// solution(M, N)으로 호출 → C(M, N) 계산
arr.forEach((i) => solution(+i.split(" ")[1], +i.split(" ")[0]));
