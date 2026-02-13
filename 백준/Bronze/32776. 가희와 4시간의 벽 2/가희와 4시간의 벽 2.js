// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// S_ab: 고속철도로 역 a에서 b까지 가는 시간(분)
const trainTime = Number(input[0]);

// M_a, F_ab, M_b: 항공편 이용 시간 구성 요소
const [Ma, Fab, Mb] = input[1].split(' ').map(Number);

// ===== 교통수단 선택 판별 =====
// 항공편 총 소요 시간 = 역 -> 공항 + 비행 + 공항 -> 역
const flightTime = Ma + Fab + Mb;

/*
    고속철도를 더 많이 이용하는 조건(둘 중 하나 이상):
    1. 항공편이 고속철도보다 느리거나 같음
    2. 고속철도가 4시간(240분) 이하 AND 사람들이 철도를 좋아함(역 a 이용자들은 철도 선호)
*/

if (flightTime >= trainTime) {
    // 조건1: 항공편이 더 느리거나 같으면 모두 고속철도 이용
    console.log('high speed rail');
} else if (trainTime <= 240) {
    // 조건2: 4시간 이하이고 철도를 좋아하는 사람들(다수)이 고속철도 이용
    console.log('high speed rail');
} else {
    // 항공편이 더 빠르고 4시간 초과 -> 모두 항공편 이용
    console.log('flight');
}
