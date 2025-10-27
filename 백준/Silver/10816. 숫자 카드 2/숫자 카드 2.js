/*
 * 숫자 카드 개수 세기
 *
 * 핵심 아이디어:
 * 1. 카드를 정렬
 * 2. 이진 탐색으로 특정 숫자의 시작 위치와 끝 위치 찾기
 * 3. (끝 위치 - 시작 위치) = 개수
 *
 * 예: [1, 2, 3, 3, 3, 4, 5]에서 3의 개수
 *     lowerBound(3) = 2 (3이 시작하는 인덱스)
 *     upperBound(3) = 5 (3이 끝나는 다음 인덱스)
 *     5 - 2 = 3개
 */

// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// ===== 데이터 파싱 =====
// 상근이가 가진 숫자 카드 N개
let n = Number(input[0]);
let data = input[1].split(" ").map(Number);

// 이진 탐색을 위해 정렬
data.sort((a, b) => a - b);

// 확인할 숫자 M개
let m = Number(input[2]);
let query = input[3].split(" ").map(Number);

// ===== Lower Bound (하한) =====
// target 이상인 값이 처음 나타나는 위치 찾기
// 즉, target이 시작되는 index
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    // arr[mid]가 target 이상이면 왼쪽 절반 탐색
    if (arr[mid] >= target) end = mid;
    // arr[mid]가 target 미만이면 오른쪽 절반 탐색
    else start = mid + 1;
  }
  // target이 시작하는 위치
  return end;
}

// ===== Upper Bound (상한) =====
// target 초과인 값이 처음 나타나는 위치 찾기
// 즉, target이 끝나는 다음 index
function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    // arr[mid]가 target 초과이면 왼쪽 절반 탐색
    if (arr[mid] > target) end = mid;
    // arr[mid]가 target 이하이면 오른쪽 절반 탐색
    else start = mid + 1;
  }
  // target 다음 값이 시작하는 위치
  return end;
}

// ===== 특정 값의 개수 세기 =====
// leftValue부터 rightValue까지 범위의 원소 개수(이 문제에서는 같은 값)
function countByRange(arr, leftValue, rightValue) {
  // rightValue 초과인 첫 위치
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  // leftValue 이상인 첫 위치
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);

  // 개수 = (끝 위치) - (시작 위치)
  return rightIndex - leftIndex;
}

// ===== 각 쿼리 처리 =====
let answer = "";
for (let i = 0; i < m; i++) {
  // query[i] 숫자가 몇 개 있는지 세기
  answer += countByRange(data, query[i], query[i]) + " ";
}

// ===== 결과 출력 =====
console.log(answer);
