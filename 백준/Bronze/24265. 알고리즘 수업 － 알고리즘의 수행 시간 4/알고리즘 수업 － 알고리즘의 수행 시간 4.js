// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거 후 입력값을 문자열로 저장
let input = require("fs").readFileSync(file).toString().trim();

// 3. 코드1 실행 횟수를 누적할 변수 초기화
let num = 0;

// 4. MenOfPassion 알고리즘과 동일한 루프 구조로 실행 횟수 계산
for (let i = 1; i <= input - 1; i++) {
  // 내부 루프 실행 횟수: (n - i)번
  // 예: n=5일때, i=1이면 j=2,3,4,5 -> 4번
  num += i;
}

// 5. MenOfPassion 알고리즘의 코드1 실행 횟수 출력
console.log(num);

// 6. MenOfPassion 알고리즘의 시간 복잡도 차수 출력 (O(n²) = O(n^2))
console.log(2);
