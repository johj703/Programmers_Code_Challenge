// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 문자열로 저장
let input = require("fs").readFileSync(file).toString();

// 3. 입력값 N을 정수로 변환
const N = parseInt(input);

// 4. 가장 작은 생성자를 지정할 변수(0이면 생성자 없음)
let M = 0;

// 5. 1부터 N-1까지 모든 수를 생성자 후보로 검사
for (let i = 0; i < N; i++) {
  // 6. 분해합을 계산할 변수 초기화
  let sum = 0;

  // 7. 현재 생성자 후보
  const candidateValue = i;

  // 8. 각 자릿수의 합을 구하기 위해 문자열로 변환
  const stringValue = candidateValue.toString();

  // 9. 각 자릿수를 더하기
  for (let j = 0; j < stringValue.length; j++) {
    sum += parseInt(stringValue[j]);
  }

  // 10. 분해합 = 생성자 후보 + 각 자릿수의 합
  sum += candidateValue;

  // 11. 분해합이 N과 같으면 생성자 발견
  if (sum === N) {
    M = candidateValue;
    // 가장 작은 생성자를 찾았으므로 종료
    break;
  }
}

// 12. 결과 출력(0이면 생성자 없음)
console.log(M);
