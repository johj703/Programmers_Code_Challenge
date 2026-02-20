// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const [A, B, C, D] = require('fs')
    .readFileSync(file)
    .toString()
    .trim()
    .split(' ')
    .map(Number);
/* 
    A: 셔틀이 정문 정류장까지 도착하는 데 남은 시간 (분)
    B: 셔틀이 정문에서 공학관까지 가는 데 걸리는 시간 (분)
    C: 정문에서 공학관까지 걸어가는 데 걸리는 시간 (분)
    D: 수업 시간까지 남은 시간 (분)
*/

// ===== 각 선택의 쇼요 시간 계산 =====
// 셔틀을 타는 경우: 셔틀 대기 시간 + 이동 시간
const shuttleTime = A + B;

// 걸어가는 경우: 걷는 시간
const walkTime = C;

// ===== 지각 여부 판별 =====
// 지각하지 않으려면 소요 시간 <= 남은 시간
const shuttleOK = shuttleTime <= D; // 셔틀로 지각 안 함
const walkOK = walkTime <= D; // 걸어가서 지각 안 함

// ===== 결과 출력 =====
if (shuttleOK && walkOK) {
    // 둘 다 지각 안함
    console.log('~.~');
} else if (!shuttleOK && !walkOK) {
    // 둘 다 지각
    console.log('T.T');
} else if (shuttleOK && !walkOK) {
    // 셔틀만 지각 안 함
    console.log('Shuttle');
} else {
    // 걷기만 지각 안 함
    console.log('Walk');
}
