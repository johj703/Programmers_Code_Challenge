// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽어서 줄 단위로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. x좌표와 y좌표를 각각 저장할 배열 초기화
let arrayX = [];
let arrayY = [];

// 4. 네 번째 점의 좌표를 저장할 변수 선언
let x;
let y;

// 5. 세 점의 좌표에서 x좌표와 y좌표를 분리하여 배열에 저장
for (let i = 0; i < 3; i++) {
  // 각 줄을 공백으로 분리하여 x좌표(0번 index)와 y좌표(1번 index) 추출
  arrayX.push(Number(input[i].split(" ")[0])); // x 좌표 배열에 추가
  arrayY.push(Number(input[i].split(" ")[1])); // y 좌표 배열에 추가
}

// 6. 좌표 배열을 오름차순으로 정렬
arrayX = arrayX.sort();
arrayY = arrayY.sort();

// 7. 네 번째 점의 x좌표 찾기
// 직사각형에서는 각 좌표가 두 번씩 나타나므로, 한 번만 나타나는 좌표가 답이다.
x = arrayX[1] === arrayX[0] ? arrayX[2] : arrayX[0];

// 8. 네 번째 점의 y좌표 찾기
// 같은 원리로 y좌표도 한 번만 나타나는 좌표가 답이다.
y = arrayY[1] === arrayY[0] ? arrayY[2] : arrayY[0];

// 9. 네 번째 점의 좌표 출력
console.log(`${x} ${y}`);
