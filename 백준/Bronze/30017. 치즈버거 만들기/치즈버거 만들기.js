// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
let [A, B] = require("fs").readFileSync(file).toString().trim().split(" ").map(Number);

// A: 패티의 개수
// B: 치즈의 개수

// ===== 치즈버거 최대 크기 계산 =====
// 치즈버거 구조: 패티-치즈-패티-치즈-...-패티
// 패티 개수 = 치즈 개수 + 1

/*
    사용할 치즈의 최대 개수
    - 치즈를 C개 쓰려면 패티가 C+1개 필요
    - C+1 <= A -> C <= A-1
    - C <= B
    따라서 C <= min(A - 1, B)
*/
const maxCheeses = Math.min(A - 1, B);

// 사용할 패티의 개수
// 패티 = 치즈 + 1
const maxPatty = maxCheeses + 1;

// 치즈버거의 최대 크기 = 패티 개수 + 치즈 개수
// = (C + 1) + C = 2C + 1
const maxSize = maxPatty + maxCheeses;

// ===== 결과 출력 =====
console.log(maxSize);