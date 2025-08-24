// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 처리 및 구조 분해 할당
// 예: "60466175 36" -> ["60466175", "36"] -> n = "60466175", b = "36"
let [n, b] = require("fs").readFileSync(file).toString().trim().split(" ");

// 3. 진법 변환 결과를 저장할 배열(역순으로 저장됨)
let result = [];

// 4. 문자열을 숫자로 변환
// n = Number(n)과 동일
n = +n;
// b = Number(b)과 동일
b = +b;

// 5. 진법 변환의 핵심 반복문(n이 b보다 작을 때까지)
while (n >= b) {
  // 6. 나머지 몫 계산
  // 나머지(변환될 자릿수)
  let remainder = n % b;
  // 몫(다음 반복에서 사용)
  let quotient = Math.trunc(n / b);

  // 7. 나머지를 해당 진법의 문자로 변환
  if (remainder >= 10) {
    // 10 이상이면 알파벳으로 변환(A=10, B=11, ..., Z=35)
    // ASCII 코드: A:65, 따라서 remainder + 55 = A(10 + 55 = 65)
    result.push(String.fromCharCode(remainder + 55));
  } else {
    // 9 이하면 그대로 숫자 사용
    result.push(remainder);
  }
  // 8. 다음 반복을 위해 n을 몫으로 업데이트
  n = quotient;
}

// 9. 마지막 남은 숫자 처리(n < b가 되어 반복문 종료 후)
if (n >= 10) {
  // 10 이상이면 알파벳으로 변환
  result.push(String.fromCharCode(n + 55));
} else {
  // 9 이하면 그대로 숫자 사용
  result.push(n);
}

// 10. 배열을 뒤집어서 문자열로 합쳐서 출력
// 진법 변환은 나머지를 거꾸로 읽어햐 하므로 reverse() 필요
console.log(result.reverse().join(""));
