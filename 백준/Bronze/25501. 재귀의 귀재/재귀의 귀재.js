// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// ===== 데이터 파싱 =====
// 첫 줄: 테스트케이스 개수
const times = Number(input.shift());

// recursion 함수 호출 횟수를 세는 전역 변수
let cnt = 0;

// ===== 재귀 함수 =====
// s: 문자열
// l: 왼쪽 인덱스 (left)
// r: 오른쪽 인덱스 (right)
// 반환값: 팰린드롬이면 1, 아니면 0
const recursion = (s, l, r) => {
  // 함수 호출 횟수 증가
  cnt += 1;

  // Base Case: 왼쪽 인덱스가 오른쪽 인덱스보다 크거나 같으면 팰린드롬
  // (더 이상 비교할 문자가 없음)
  if (l >= r) {
    return 1;
    // 양 끝 문자가 다르면 팰린드롬 아님
  } else if (s[l] != s[r]) {
    return 0;
    // 양 끝 문자가 같으면 안쪽으로 한 칸씩 이동하여 재귀 호출
  } else {
    return recursion(s, l + 1, r - 1);
  }
};

// ===== 팰린드롬 판별 함수 =====
// s: 판별할 문자열
// 반환값: 팰린드롬이면 1, 아니면 0
const isPalindrome = (s) => {
  return recursion(s, 0, s.length - 1);
};

// ===== 각 테스트케이스 처리 =====
for (let i = 0; i < times; i++) {
  // 각 테스트케이스마다 카운터 초기화
  cnt = 0;
  console.log(isPalindrome(input[i].trim()), cnt);
}
