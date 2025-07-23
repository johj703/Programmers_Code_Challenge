// 1. 입력 파일을 읽어서 줄 단위로 나누기(9개 자연수, 각각 한 줄씩)
// 3, 29, 38, 12, 57, 74, 40, 85, 61
// input = ["3","29","38","12","57","74","40","85","61"]
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 2. 문자열 배열을 숫자 배열로 변환
// ["3","29","38", ...] -> [3, 29, 38, ...]
let arr = input.map(Number);

// 3. 배열에서 최대값 찾기
// Math.max(...arr) = Math.max(3, 29, 38, 12, 57, 74, 40, 85, 61) = 85
let max = Math.max(...arr);

// 4. 최대값의 위치(몇 번째인지)를 저장할 변수
let maxNum;

// 5. 배열을 순회하며 최대값의 위치 찾기
for(let i = 0; i < 9; i++){
    // 현재 요소가 최대값과 같으면
    if(max === arr[i]){
        // index는 0부터 시작하므로 +1(1번째부터 세기 위해서)
        // ex: arr[7] = 85일때, 위치는 7 + 1 = 8번째
        maxNum = i + 1;
    }
}

// 6. 최대값과 그 위치 출력
console.log(max);
console.log(maxNum);