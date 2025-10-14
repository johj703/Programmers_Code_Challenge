// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 첫 번째 줄에서 점의 개수 추출
let n = Number(input[0]);

// 4. 좌표르랴 저장할 2차원 배열 초기화
let arr = [];

// 5. 각 좌표를 배열에 저장
for (let i = 1; i <= n; i++) {
  // 6. 각 줄을 공백으로 분리하여 x, y 좌표 추출
  let [a, b] = input[i].split(" ").map(Number);
  // 7. [x, y] 형태로 배열에 추가
  arr.push([a, b]);
}

// 8. 좌표 정렬(x 우선, x가 같으면 y로 정렬)
arr.sort((a, b) => {
  // 9. x좌표가 다르면 x좌표 기준 오름차순 정렬
  if (a[0] != b[0]) return a[0] - b[0];
  // 10. x좌표가 같으면 y좌표 기준 오름차순 정렬
  else return a[1] - b[1];
});

// 11. 출력할 문자열 생성
let answer = "";
for (let i = 0; i < n; i++) {
  // 12. "x y" 형태로 문자열에 추가
  answer += arr[i][0] + " " + arr[i][1] + "\n";
}

// 13. 정렬된 좌표 출력
console.log(answer);
