// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
let [A, B] = require("fs").readFileSync(file).toString().trim().split(" ").map(Number);

// A: 햄버거 빵의 개수
// B: 햄버거 패티의 개수

// ===== 햄버거 최대 개수 계산 =====
// 햄버거 1개를 만들려면: 빵 2개(아래 + 위) + 패티 1개 보유

// 빵으로 만들 수 있는 햄버거의 최대 개수
// 햄버거 1개당 빵 2개가 필요하므로 A / 2 (내림)
// 예: 빵 6개 -> 6 / 2 = 3개 햄버거 가능
// 예: 빵 5개 -> 5 / 2 = 2개 햄버거 가능(빵 1개 남음)
const maxFromBread = Math.floor(A / 2);

// 패티로 만들 수 있는 햄버거의 최대 개수
// 햄버거 1개당 패티 1개가 필요하므로 B개
const maxFromPatty = B;

// 실제로 만들 수 있는 햄버거 개수는 둘 중 작은 값
// 예제1: min(3, 3) = 3개
// 예제2: min(2, 4) = 2개 (빵이 부적)
// 예제3: min(0, 7) = 0개 (빵이 너무 부족)
const result = Math.min(maxFromBread, maxFromPatty);

// ===== 결과 출력 =====
console.log(result);