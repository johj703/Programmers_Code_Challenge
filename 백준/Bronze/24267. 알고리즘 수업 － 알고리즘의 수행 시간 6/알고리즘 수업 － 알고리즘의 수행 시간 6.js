// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 입력값을 BigInt로 변환(큰 수 처리를 위해)
let num = BigInt(input);

// 4. 코드1 실행 횟수를 누적할 변수 초기화
let hap = 0n;

// 5. 외부 루프의 반복 횟수(n-2번)
let getNum = num - 2n;

// 6. MenOfPassion 알고리즘의 실행 횟수 계산
for (let i = 1n; i <= num - 1n; i++) {
  // 각 i에 대해 내부 두 루프의 실행 횟수를 누적
  // i번째에서 가능한 (j, k) 조합의 개수
  hap += getNum * i;

  // 다음 반복에서 가능한 k 개수 감소
  getNum -= 1n;
}

// 7. MenOfPassion 알고리즘의 코드1 실행 횟수 출력
console.log(`${hap}`);

// 8. MenOfPassion 알고리즘의 시간 복잡도 차수 출력 (O(n³) = O(n^3))
console.log(3);
