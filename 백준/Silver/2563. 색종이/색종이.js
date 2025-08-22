// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽어서 줄 단위로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 100x100 크기의 도화지를 나타내는 2차원 배열 생성
// 0: 흰색(빈 공간), 1: 검은색(색종이가 붙은 곳)
let drawingPaper = Array.from(Array(100), () => Array(100).fill(0));

// 4. 첫 번째 줄(색종이 개수)을 제외한 나머지 줄에서 좌표 추출
// 각 줄을 공백으로 분리하고 숫자로 변환하여 [x, y] 좌표 배열 생성
const confetti = input.slice(1).map((line) => line.split(` `).map(Number));

// 5. 검은색 영역의 넓이를 세는 변수
let size = 0;

// 6. 각 색종이에 대해 도화지 붙이기
confetti.forEach((line) => {
  // 7. 색종이의 왼쪽 아래 좌표 (x, y) 추출
  const [x, y] = line;

  // 8. 10x10 크기의 색종이를 도화지에 붙이기
  // x좌표부터 x+9까지
  for (let i = x; i < x + 10; i++) {
    // y좌표부터 y+9까지
    for (let j = y; j < y + 10; j++) {
      // 9. 이미 색종이가 붙어있는 곳이면 건너뛰기(중복 방지)
      if (1 === drawingPaper[i][j]) continue;

      // 10. 새로운 영역에 색종이 붙이기
      // 검은색으로 표시
      drawingPaper[i][j] = 1;
      // 넓이 증가
      size++;
    }
  }
});

// 11. 색종이가 붙은 총 넓이 출력
console.log(size);
