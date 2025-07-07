const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n");

// 시작 시간 추출(문자열을 숫자로 변환)
let H = Number(input[0].split(" ")[0]);    // 시간
let M = Number(input[0].split(" ")[1]);    // 분
let C = Number(input[1]);    // 요리 시간

function solution(H, M, C){
    // 현재 분에 요리 시간(분) 추가
    M += C;
    // 분이 60 이상이면 시간으로 변환
    while(M >= 60){
        // 60분을 빼서 분 단위 조정
        M -= 60;
        // 시간을 1 증가
        H += 1;
    }
    // 할당 연산자를 통해 24시간 형식으로 변환(24시 -> 0시)
    H = H % 24;
    // 최종 완료 시간 출력
    console.log(H, M);
}

// 함수 호출
solution(H, M, C);