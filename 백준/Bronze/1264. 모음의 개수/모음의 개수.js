// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// ===== 각 줄마다 모음 개수 세기 =====
// 모음 목록 (대문자, 소문자 모두 포함)
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

for (let i = 0; i < input.length; i++) {
    const line = input[i];

    // '#'이 나오면 종료
    if (line === '#') {
        break;
    }

    // 현재 줄의 모음 개수 세기
    let vowelCount = 0;

    // 줄의 각 문자를 순회
    for (let j = 0; j < line.length; j++) {
        // 현재 문자가 모음인지 확인
        if (vowels.includes(line[j])) {
            vowelCount++;
        }
    }

    // 현재 줄의 모음 개수 출력
    console.log(vowelCount);
}
