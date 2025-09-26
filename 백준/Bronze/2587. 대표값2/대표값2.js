// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 문자열을 숫자로 변환
const numbers = input.map(Number);

// 4. 평균 계산을 위한 총합 변수 초기화
let total = 0;

// 5. 모든 수의 합계 계산
for (let i = 0; i < input.length; i++) {
  total += numbers[i];
}

// 6. 중앙값을 구하기 위해 숫자 배열을 오름차순 정렬
const sortedNumbers = numbers.sort((a, b) => a - b);

// 7. 중앙값 index 계산(5개 수에서 가운데는 index 2)
const middleIndex = Math.floor(input.length / 2);

// 8. 평균 출력(총합/개수)
console.log(total / numbers.length);

// 9. 중앙값 출력 (정렬된 배열의 가운데 값)
console.log(sortedNumbers[middleIndex]);
