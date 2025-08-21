// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽어서 줄 단위로 분리
// 총 5개의 단어가 각각 한 줄씩 입력됨
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 세로읽기 결과를 저장할 변수 초기화
let answer = "";

// 4. 세로읽기 수행: 열 우선 순회(왼쪽 열부터 오른쪽 열로
// j: 열 index(0~14, 최대 15글자)
for (let j = 0; j < 15; j++) {
  // i: 행 index(0~4, 총 5개 단어)
  for (let i = 0; i < 5; i++) {
    // 5. 해당 위치에 글자가 없으면 건너뛰기
    // 단어 길이가 다르므로 일부 위치에 글자가 없을 수 있음
    if (input[i][j] === undefined) continue;

    // 6. 해당 위치의 글자를 결과 문자열에 추가
    answer += input[i][j];
  }
}

// 7. 세로읽기 결과 출력
console.log(answer);
