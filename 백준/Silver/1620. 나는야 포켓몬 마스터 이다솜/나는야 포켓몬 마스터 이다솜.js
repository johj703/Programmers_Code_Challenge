/*
 * 포켓몬 도감 = 디지털 사전
 *
 * Map(해시 테이블)의 동작 원리:
 * 1. 저장: map.set("피카츄", "1번")
 *    → hash("피카츄") = 76 (해시 함수로 인덱스 계산)
 *    → 내부배열[76] = {key: "피카츄", value: "1번"} (키-값 쌍 저장)
 *
 * 2. 검색: map.get("피카츄")
 *    → hash("피카츄") = 76 (같은 해시 함수 사용)
 *    → 내부배열[76]로 바로 이동
 *    → key가 "피카츄"인지 확인
 *    → value인 "1번" 반환
 *
 * 시간 복잡도: O(1) - 계산으로 위치를 바로 찾기 때문에!
 */

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
// 첫 줄에서 N(포켓몬 개수)과 M(문제 개수) 추출
let [N, M] = input
  .shift()
  .split(" ")
  .map((n) => +n);

// ===== 포켓몬 도감 생성 (Map 사용) =====
// Map은 사전처럼 "키 - 값 쌍"을 저장하는 자료구조
// - 내부적으로 해시 함수로 키를 index로 변환
// - 계산된 index 위치에 {key: 키, value: 값} 형태로 저장
// - 검색 시 O(1): 키 -> 해시 계산 -> index로 바로 접근
let map = new Map();

// 결과를 저장할 문자열(한 번에 출력하기 위해)
let answer = "";

// ===== 도감 생성 및 문제 처리 =====
for (let i = 0; i < input.length; i++) {
  // ✅ 명시적으로 N + M 사용
  if (i < N) {
    // ===== 포켓몬 도감 만들기 (사전 만들기) =====
    let pokemon = input[i].trim();

    // 양방향 사전 생성: 번호로도 찾고, 이름으로도 찾기
    map.set(`${i + 1}`, pokemon); // "1" → "피카츄" (번호 키 → 이름 값)
    map.set(pokemon, `${i + 1}`); // "피카츄" → "1" (이름 키 → 번호 값)

    // 내부 동작 예시:
    // hash("1") = 어떤 인덱스 → 그 위치에 {key: "1", value: "피카츄"} 저장
    // hash("피카츄") = 다른 인덱스 → 그 위치에 {key: "피카츄", value: "1"} 저장
  } else {
    // ===== 문제 처리 (사전에서 찾기) =====
    let query = input[i].trim(); // 질문 (번호로 찾기 or 이름으로 찾기)

    // Map에서 검색: O(1)
    // 1. hash(query)로 인덱스 계산
    // 2. 계산된 인덱스 위치로 바로 이동
    // 3. 키-값 쌍에서 값(value) 반환
    answer += `${map.get(query)}\n`;
  }
}

// ===== 결과 출력 =====
console.log(answer);
