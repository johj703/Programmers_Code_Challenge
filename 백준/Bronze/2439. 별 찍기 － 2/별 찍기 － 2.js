const input = require('fs').readFileSync('/dev/stdin').toString().trim();

// 입력받은 문자열을 숫자로 변환
let num = Number(input);

// 1번째 줄부터 num번째 줄까지 반복
for(let i = 1; i <= num; i++){
    // 각 줄마다 공백과 별의 개수 계산
    // 앞에 올 공백 개수: (전체 - 현재 줄)
    let blank = ' '.repeat(num - i);
    // 현재 줄의 별 개수: i개
    let stars = '*'.repeat(i);
    
    // 공백 + 별을 합쳐서 오른쪽 정렬된 형태로 출력
    console.log(blank + stars);
}