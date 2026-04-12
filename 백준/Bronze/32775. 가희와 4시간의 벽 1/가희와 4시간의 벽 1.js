// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// Sab: 고속철도 소요 시간 (분)
const Sab = Number(input[0]);

// Fab: 항공편 소요 시간 (분)
// (공항-역 간 이동 시간은 무시하므로 Fab만 사용)
const Fab = Number(input[1]);

// ===== 교통수단 비교 =====
// 항공편이 더 빠르면 flight, 아니면 high speed rail
if (Fab < Sab) {
    console.log('flight');
} else {
    console.log('high speed rail');
}
