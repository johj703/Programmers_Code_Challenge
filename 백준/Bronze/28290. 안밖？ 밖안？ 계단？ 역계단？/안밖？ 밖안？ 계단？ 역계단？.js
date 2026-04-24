// ===== 백준 28290번 "안밖? 밖안? 계단? 역계단?" (브론즈3) =====
// https://www.acmicpc.net/problem/28290
// 풀이일: 2026-04-23

// ===== 정답 코드 =====
// 시간 복잡도: O(1) - Big-O, 문자열 비교는 상수 시간
// 공간 복잡도: O(1) - Big-O, 고정된 문자열만 사용

// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const S = require("fs")
  .readFileSync(file)
  .toString()
  .trim();

// ===== 타법 판별
if (S === 'fdsajkl;' || S === 'jkl;fdsa') {
    console.log('in-out');
} else if (S === "asdf;lkj" || S === ";lkjasdf") {
    console.log('out-in');
} else if (S === "asdfjkl;") {
    console.log('stairs');
} else if (S === ";lkjfdsa") {
    console.log('reverse');
} else {
    console.log('molu');
}