// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거
let input = require("fs").readFileSync(file).toString().trim();

// ===== K/D/A 파싱 =====
// "K/D/A" 형태를 슬래시(/)로 분리
const [K, D, A] = input.split("/").map(Number);

// ===== 진짜/가짜 판별 =====
// 가짜 조건: K + A < D 이거나 D = 0
// 진짜 조건: 그 외
if(K + A < D || D === 0) {
    // 가짜
    console.log("hasu");
} else {
    // 진짜
    console.log("gosu");
}