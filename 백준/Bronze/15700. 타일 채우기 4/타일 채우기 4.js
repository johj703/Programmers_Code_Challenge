// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, 앞 뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const input = require("fs").readFileSync(file).toString().trim().split(" ");

// N과 M을 BigInt로 변환(N, M이 최대 10억이므로 N×M은 10^18까지 가능)
// JavaScript의 Number는 안전한 정수 범위가 2^53-1까지이므로 BigInt 사용 필수
const N = BigInt(input[0]); // 벽의 세로 크기
const M = BigInt(input[1]); // 벽의 가로 크기

// ===== 최대 타일 개수 계산 =====
// 벽의 총 칸 수 = N × M
// 각 타일은 2칸을 차지함(2×1 또는 1×2)
// 최대 타일 개수 = (N × M) ÷ 2 (정수 나눗셈, 내림)
// 예: 3×3 = 9칸 -> 9÷2 = 4개 타일 (8칸 사용, 1칸 남음)
const maxTiles = (N * M) / 2n; // BigInt 나눗셈은 자동으로 내림 처리됨

// ===== 결과 출력 =====
// BigInt를 문자열로 변환하여 출력
console.log(maxTiles.toString());
