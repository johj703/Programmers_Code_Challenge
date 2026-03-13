// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// ===== 각 회원 분류 =====
for (let i = 0; i < input.length; i++) {
    // 각 줄을 공백으로 분리
    const [name, age, weight] = input[i].split(' ');

    // "# 0 0"이 나오면 종료
    if (name === '#') {
        break;
    }

    // 나이와 몸무게를 숫자로 변환
    const ageNum = Number(age);
    const weightNum = Number(weight);

    /*
        성인부 vs 청소년부 분류
        나이 > 17 또는 몸무게 >= 80 -> Senior
        그 외 -> Junior
    */
    if (ageNum > 17 || weightNum >= 80) {
        console.log(`${name} Senior`);
    } else {
        console.log(`${name} Junior`);
    }
}
