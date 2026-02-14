// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// T: 테스트 케이스의 개수
const T = Number(input[0]);

// ===== 각 테스트 케이스 처리 =====
for (let i = 1; i <= T; i++) {
    // t: 시간(t시간 30분 후를 확인)
    const t = Number(input[i]);

    /*
        민규의 생활 패턴:
        - 17시간 연속 깨어 있음
        - 8시간 연속 잠
        - 총 주기: 25시간
    */
    // t시간 30분 후 = t + 0.5 시간 후
    const totalTime = t + 0.5;

    // 25시간 주기 내에서의 위치 (0~25)
    const timeInCycle = totalTime % 25;

    /* 
    0~17시간: 깨어있음 (ONLINE)
    17~25시간: 잠 (OFFLINE)
   */
    if (timeInCycle < 17) {
        console.log('ONLINE');
    } else {
        console.log('OFFLINE');
    }
}
