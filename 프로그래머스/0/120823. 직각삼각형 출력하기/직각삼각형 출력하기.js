const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    // 입력 받은 첫 번째 값을 숫자로 변환
    const num = Number(input[0]);
    // 삼각형 패턴을 저장할 문자열 변수를 초기화
    let logStr = '';
    // 삼각형의 각 행을 생성하는 반복문
    for(let i = 0; i < num; i++) {
        // 현재 행에 "*"을 추가하는 반복문
        // i+1개의 "*"을 현재 행에 추가
        for(let j = 0; j <= i; j++) {
            logStr += '*';
        }
        // 각 행의 끝에 줄바꿈 문자를 추가
        logStr += '\n'
    }
    // 완성된 삼각형 패턴을 출력
    console.log(logStr)
});