// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽어서 줄 단위로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 첫 번째 줄에서 옥구슬 개수 추출
const count = Number(input.shift());

// 4. x좌표와 y좌표를 각각 저장할 배열 초기화
let xArr = [];
let yArr = [];

// 5. 각 옥구슬의 좌표를 분리하여 배열에 저장
input.forEach((item) => {
  // 문자열을 숫자로 변환
  let [x, y] = item.split(" ").map(Number);
  // x좌표 배열에 추가
  xArr.push(x);
  // y좌표 배열에 추가
  yArr.push(y);
});

// 6. 직사각형의 가로와 세로 길이 계산
// 가로 = 최대x - 최소x
let width = Math.max(...xArr) - Math.min(...xArr);
// 세로 = 최대y - 최소y
let height = Math.max(...yArr) - Math.min(...yArr);

// 7. 직사각형의 넓이 계산 및 출력
console.log(width * height);
