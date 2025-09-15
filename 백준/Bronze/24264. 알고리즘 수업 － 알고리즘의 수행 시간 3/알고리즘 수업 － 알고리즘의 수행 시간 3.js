// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거 후 입력값을 문자열로 저장
let input = require("fs").readFileSync(file).toString().trim();

// 3. MenOfPassion 알고리즘 코드1 실행 횟수 출력(n^2번)
console.log(Math.pow(input, 2));

// 4. MenOfPassion 알고리즘의 시간 복잡도 차수 출력(O(n^2) = O(n^2))
console.log(2);
