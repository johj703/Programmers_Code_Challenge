// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 2. 입력 파일을 읽고 전처리
let input = require("fs")
  .readFileSync(file) // 파일 내용 읽기
  .toString() // Buffer를 문자열로 변환
  .trim() // 앞 뒤 공백 제거
  .split(" ") // 공백으로 분리하여 배열 생성
  .map((el) => +el); // 각 요소를 숫자로 변환(+el = Number(el))

// 3. solution 함수 호출
solution(input);

function solution(input) {
  // 4. 구조 분해 할당으로 좌표갑 추출
  // x, y = 현재 위치 w, h = 직사각형 크기
  const [x, y, w, h] = input;

  // 5. 각 경계선까지의 거리를 저장할 배열
  let answer = [];

  // 6. 4개의 경계선까지의 거리 계산
  // 위쪽 경계선까지의 거리
  answer.push(Math.abs(y - h));

  // 아래쪽 경계선까지의 거리(= y)
  answer.push(Math.abs(y - 0));

  // 오른쪽 경계선까지의 거리
  answer.push(Math.abs(w - x));

  // 왼쪽 경계선까지의 거리(= x)
  answer.push(Math.abs(x - 0));

  // 7. 4개 거리 중 최소값 출력
  console.log(Math.min(...answer));
}
