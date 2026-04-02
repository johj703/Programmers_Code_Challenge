// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// 사람들의 위치
const [p1, p2, p3, p4] = input[0].split(' ').map(Number);

// 사과의 정보
const [x, y, r] = input[1].split(' ').map(Number);

// ===== 사과와 충돌하는 사람 찾기 =====
/*
    사과는 y축 방향으로만 떨어지므로, x좌표는 변하지 않음.
    사과의 중심 x 좌표와 같은 위치에 있는 사람이 충돌
*/

const people = [p1, p2, p3, p4];

for (let i = 0; i < 4; i++) {
    if (people[i] === x) {
        // i + i번 사람과 충돌
        console.log(i + 1);
        process.exit(); // 프로그램 종료
    }
}

// 충돌하는 사람이 없으면 0 출력
console.log(0);
