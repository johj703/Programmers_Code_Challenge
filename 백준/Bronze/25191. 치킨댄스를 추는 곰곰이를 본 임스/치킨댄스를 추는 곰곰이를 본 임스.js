// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거 후 숫자로 변환
const input = require("fs").readFileSync(file).toString().trim().split("\n");

// N: 치킨집에 있는 치킨의 총 개수
const N = Number(input[0]);

// A: 집에 잇는 콜라의 개수, B: 집에 있는 맥주의 개수
const [A, B] = input[1].split(" ").map(Number);

// ===== 먹을 수 있는 치킨 개수 계산 =====
/* 
    치킨 1마리당 필요한 음료: 콜라 2개 또는 맥주 1개

    콜라로 먹을 수 있는 치킨 개수
    콜라 2개당 치킨 1마리이므로 A / 2(내림)
    예: 콜라 4개 -> 4 / 2 = 2마리
*/
const chickenFromCola = Math.floor(A / 2);

/* 
    맥주로 먹을 수 있는 치킨 개수
    맥주 1개당 치킨 1마리이므로 B
    예: 맥주 2개 -> 2마리
*/
const chickenFromBeer = B;

/*
    음료로 먹을 수 있는 총 치킨 개수
    예: 2 + 2 = 4마리
*/
const maxChickenByDrink = chickenFromCola + chickenFromBeer;

/* 
    실제로 시켜먹을 수 있는 치킨 개수는
    치킨집에 있는 치킨 개수(N)와 음료로 가능한 치킨 개수 중 작은 값
    예제1: min(5, 4) = 4마리
    예제2: min(3, 4) = 3마리
*/
const result = Math.min(N, maxChickenByDrink);

// ===== 결과 출력 =====
// 임스가 시켜먹을 수 있는 치킨의 총 개수 출력
console.log(result);
