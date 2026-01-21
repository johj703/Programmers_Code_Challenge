// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거, 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// N: 남은 일 수, X: 하루에 살 양말의 개수
const [N, X] = input[0].split(" ").map(Number);

// A: N일간의 양말 가격 배열
const A = input[1].split(" ").map(Number);

// ===== 최소 비용 계산 =====
// 연속한 이틀에 걸쳐 양말을 X개씩 구매
// i번째 날과 (i+1)번째 날에 구매하는 비용 = X × (A[i] + A[i+1])
let minCost = Infinity; // 최소 비용 초기화

// 모든 연속한 이틀을 확인
for(let i = 0; i < N -1; i++) {
    /* 
        i번째 날과 (i+1)번째 날에 구매하는 총 비용
        i번째 날: X개 × A[i]원
        (i + 1)번째 날: X개 × A[i + 1]원
        총: X × (A[i] + A[i + 1])원
    */
   const cost = X * (A[i] + A[i + 1]);
   
   // 최소 비용 갱신
   minCost = Math.min(minCost, cost);
}

// ===== 결과 출력 =====
console.log(minCost);