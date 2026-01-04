// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, 앞 뒤 공백 제거
const input = require("fs").readFileSync(file).toString().trim();

// ===== FA수 판별 =====
/*
    수학적으로 증명된 사실: 모든 양의 정수는 FA수이다.

    이유:
    1. F(x)를 반복하면 값이 점점 작아짐(대부분의 경우)
    2. 결국 한 자리 수에 도달
    3. 한 자리 수 d는 F(d) = d × 1 = d로 자기 자신을 반복
    4. 따라서 "동일한 수가 나오는" 조건을 만족 -> FA수

    예: F(932) -> F(27) -> F(4) -> F(4) -> F(4) -> ...
 */

// ===== 결과 출력 =====
// 모든 입력은 FA수이므로 항상 "FA" 출력
console.log("FA");
