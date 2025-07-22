// 1. 표준 입력에서 모든 데이터를 읽어와서 줄 단위로 분리
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// 2. 두 번째 줄(input[1])에서 N개의 정수들을 숫자 배열로 변환
// ex = "20 10 35 30 7" -> [20, 10, 35, 30, 7]
const arr = input[1].split(" ").map((value) => +value);

// 3. 배열을 오름차순으로 정렬
// [20, 10, 35, 30, 7] -> [7, 10, 20, 30, 35]
arr.sort(function sort1(a, b){
    return a - b;
});

// 4. 최소값과 최대값 출력
// arr[0] = 첫 번째 요소 = 최소값(7)
// arr.pop() = 마지막 요소를 꺼내기 = 최대값(35)
console.log(arr[0], arr.pop()); // "7 35" 출력