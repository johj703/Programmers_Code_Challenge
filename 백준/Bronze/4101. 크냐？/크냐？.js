// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// ===== 각 테스트 케이스 처리 =====
for (let i = 0; i < input.length; i++) {
    // 각 줄에서 두 숫자 추출
    const [a, b] = input[i].split(' ').map(Number);

    // 0 0이 나오면 종료
    if (a === 0 && b === 0) {
        break;
    }

    /*
        첫 번째 수가 두 번째 수보다 큰지 비교
        a > b이면 Yes, 아니면(같거나 작으면) No
    */
    if (a > b) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
