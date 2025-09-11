// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽어서 줄 단위로 분리
let data = require("fs")
  .readFileSync(file) // 파일 내용 읽기
  .toString() // Buffer를 문자열로 변환
  .trim() // 앞 뒤 공백 제거
  .split("\n"); // 줄바꿈으로 분리하여 배열 생성

// 3. 마지막 종료 조건 "0 0 0" 제거
data.pop();

// 4. 결과를 저장할 배열 초기화
const result = [];

// 5. 각 테스트 케이스를 순회하며 처리
for (let el of data) {
  // 6. 각 줄에서 세 변의 길이를 숫자 배열로 변환 후 오름차순 정렬
  const input = el.split(" ").map(Number);
  // [작은 값, 중간 값, 큰 값] 순서로 정렬
  input.sort((a, b) => a - b);

  // 7. 삼각형 조건 검사: 두 작은 변의 합 > 가장 긴 변
  if (input[0] + input[1] <= input[2]) {
    result.push("Invalid");
    // 조건 불만족 시 다음 케이스로
    continue;
  }
  // 8. Set을 이용한 삼각형 종류 판별
  // 같은 값은 하나만 저장되는 집합의 성질 이용
  const set = new Set(input);

  // 9. Set 크기에 따른 삼각형 분류
  if (set.size === 1) {
    // 세 변이 모두 같음 (Set에 원소 1개)
    result.push("Equilateral");
  } else if (set.size === 2) {
    // 두 변이 같음 (Set에 원소 2개)
    result.push("Isosceles");
  } else {
    // 세 변이 모두 다름 (Set에 원소 3개)
    result.push("Scalene");
  }
}

// 10. 모든 결과를 줄바꿈으로 구분하여 출력
console.log(result.join("\n"));
