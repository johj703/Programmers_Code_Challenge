// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 문자열로 저장
let input = require("fs").readFileSync(file).toString().trim();

// 3. 입력값을 숫자로 변환
const n = Number(input);

// 4. 녹색거탑을 내려오는 경우의 수 계산
// N층에서 매 층마다 2가지 선택(왼쪽 또는 오른쪽) -> 2^N
const result = 2 ** n;

// 5. 결과 출력
console.log(result);
