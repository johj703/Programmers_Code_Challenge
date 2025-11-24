// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 숫자로 변환
const N = Number(require("fs").readFileSync(file).toString().trim());

// ===== 분할 정복으로 팩토리얼 계산 =====
// start부터 end까지의 곱을 계산하는 재귀 함수
function factorial(start, end) {
  // 기저 조건: 범위가 하나의 수만 남았을 때
  if (start > end) return 1n;
  if (start === end) return BigInt(start);

  // 범위가 작을 때는 직접 계산(최적화)
  if (end - start < 100) {
    let result = 1n;
    for (let i = start; i <= end; i++) {
      result *= BigInt(i);
    }
    return result;
  }

  // 분할: 중간 지점을 기준으로 나누기
  const mid = Math.floor((start + end) / 2);

  // 정복: 왼쪽과 오른쪽을 각각 계산
  const left = factorial(start, mid);
  const right = factorial(mid + 1, end);

  // 결합: 두 결과를 곱하기
  return left * right;
}

// ===== 결과 출력 =====
// 0! = 1 (특수 케이스)
if (N === 0) {
  console.log(1);
} else {
  console.log(factorial(1, N).toString());
}
