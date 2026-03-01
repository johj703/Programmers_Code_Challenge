// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// ===== 각 암호 해독하기 =====
for (let i = 0; i < input.length; i++) {
    const line = input[i];

    // "END"가 나오면 종료(해독하지 않음)
    if (line === 'END') {
        break;
    }

    /*
        문자열 뒤집기
        split(''): 문자열을 문자 배열로 분리
        reverse(): 배열 순서 뒤집기
        join(''): 배열을 다시 문자열로 합치기

        ex) "!edoc doog a tahW"
        → ['!', 'e', 'd', 'o', 'c', ' ', 'd', 'o', 'o', 'g', ' ', 'a', ' ', 't', 'a', 'h', 'W']
        → ['W', 'h', 'a', 't', ' ', 'a', ' ', 'g', 'o', 'o', 'd', ' ', 'c', 'o', 'd', 'e', '!']
        → "What a good code!"
    */
    const decoded = line.split('').reverse().join('');

    console.log(decoded);
}
