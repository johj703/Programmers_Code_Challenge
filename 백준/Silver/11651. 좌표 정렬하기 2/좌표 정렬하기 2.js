// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 첫 번째 줄에서 점의 개수 추출
let n = Number(input[0]);

// 4. 좌표를 저장할 배열 초기화
let points = [];

// 5. 각 좌표를 배열에 저장
for (let i = 1; i < n + 1; i++) {
  // 6. 각 줄을 공백으로 분리하여 [x, y] 배열로 변환 후 추가
  points.push(input[i].split(" ").map(Number));
}

// 7. y좌표 우선, x좌표 차순위로 정렬하는 비교 함수
function sortNumbers(a, b) {
  // 8. y좌표가 다르면 y좌표 기준 오름차순 정렬
  if (a[1] !== b[1]) return a[1] - b[1];
  // 9. y좌표가 같으면 x좌표 기준 오름차순 정렬
  else return a[0] - b[0];
}
// 10. 정렬 함수를 사용하여 좌표 정렬
points.sort(sortNumbers);

// 11. 출력할 문자열 생성
let answer = "";

// 12. 정렬된 좌표를 문자열로 변환
for (let i = 0; i < n; i++) {
  // 13. [x, y]를 "x y" 형태로 변환하여 추가
  answer += points[i].join(" ") + "\n";
}

// 14. 정렬된 좌표 출력
console.log(answer);
