// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 공백으로 분리 후 숫자로 변환
let input = require("fs").readFileSync(file).toString().split(" ").map(Number);

// input[0] = K(과자 한 개 가격)
// input[1] = N(사려는 과자 개수)
// input[2] = M(현재 가진 돈)

// ===== 계산 =====
// 필요한 총 금액 = 과자 가격 × 개수
const totalCost = input[0] * input[1];

// 모자란 돈 = 필요한 금액 - 현재 가진 돈
const shortage = totalCost - input[2];

// ===== 결과 출력 =====
// 모자란 돈이 양수면 그 값, 아니면 0(돈이 충분하거나 남는 경우)
console.log(shortage >= 0 ? shortage : 0);
