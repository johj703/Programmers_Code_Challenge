// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 입력값을 BigInt로 변환(큰 수 처리를 위해)
const n = BigInt(input[0]);

// 4. MenOfPassion 알고리즘의 코드1 실행 횟수(n^3)와 시간 복잡도 차수(3) 출력
console.log(n ** 3n + "\n3");
