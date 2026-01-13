// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const input = require("fs").readFileSync(file).toString().trim().split("\n");

// T: 테스트 케이스의 개수
const T = Number(input[0]);

// ===== 각 테스트 케이스 처리 =====
for (let i = 1; i <= T; i++) {
  // a, b, c 파싱
  const [a, b, c] = input[i].split(" ").map(Number);

  /* ===== 조건을 만족하는 (x, y, z) 개수 계산 =====
    조건: (x mod y) = (y mod z) = (z mod x)

    패턴 발견: (k, k, k) 형태가 항상 조건을 만족
    왜냐하면 (k mod k) = 0, (k mod k) = 0, (k mod k) = 0
    따라서 0 = 0 = 0으로 조건 만족!

    가능한 k의 범위:
    -1 <= k -<= a (x 조건)
    -1 <= k -<= b (y 조건)
    -1 <= k -<= c (z 조건)

    세 조건을 모두 만족하려면 k <= min(a, b, c)
    예: a = 3, b = 2, c = 4 -> (1, 1, 1), (2, 2, 2) 가능 -> 2개 */

  const result = Math.min(a, b, c);

  // ===== 결과 출력 =====
  console.log(result);
}
