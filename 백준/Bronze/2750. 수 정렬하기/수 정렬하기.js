// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 첫 번째 줄에서 숫자 개수 N 추출 및 제거
const N = Number(input.shift());

// 4. 나머지 줄들을 숫자로 변환하여 배열에 저장
const numbers = input.map(Number);

// 5. 숫자 배열을 오름차순으로 정렬
numbers.sort((a, b) => a - b);

// 6. 정렬된 숫자들을 한 줄씩 출력
numbers.forEach((num) => console.log(num));
