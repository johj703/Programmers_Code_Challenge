// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 숫자로 변환
let N = Number(require("fs").readFileSync(file).toString().trim());

// ===== 결과 문자열 생성 =====
// 결과를 저장할 문자열 (한 번에 출력하기 위해)
let answer = "";

// N부터 1까지 역순으로 반복
for (let i = N; i >= 1; i--) {
  answer += i + "\n";
}

// ===== 결과 출력 =====
console.log(answer);
