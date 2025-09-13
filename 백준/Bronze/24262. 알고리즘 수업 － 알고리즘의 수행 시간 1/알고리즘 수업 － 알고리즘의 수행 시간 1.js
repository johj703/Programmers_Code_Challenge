// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞 뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. MenOfPassion 알고리즘의 코드1 실행 회수 출력
console.log(1);

// 4. MenOfPassion 알고리즘의 시간 복잡도 차수 출력 (O(1) = O(n^0))
console.log(0);
