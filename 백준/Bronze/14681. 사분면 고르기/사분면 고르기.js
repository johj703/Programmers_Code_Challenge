const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    // 입력 받은 문자열을 숫자로 변환
    // x 좌표
    const A = Number(input[0]);
    // y 좌표
    const B = Number(input[1]);

    // 사분면 판별: x, y 좌표의 부호로 구분
    // 제 1사분면: x > 0, y > 0 (둘 다 양수)
    if (A > 0 && B > 0) {
        console.log("1");
    // 제 2사분면: x < 0, y > 0 (x는 음수, y는 양수)
    } else if (A < 0 && B > 0) {
        console.log("2");
    // 제 3사분면: x < 0, y < 0 (둘 다 음수)
    } else if (A < 0 && B < 0) {
        console.log("3");
    // 제 4사분면: x > 0, y < 0 (x는 양수, y는 음수)
    } else if (A > 0 && B < 0) {
        console.log("4");
    }
    process.exit();
});