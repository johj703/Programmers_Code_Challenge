// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'

// 2. 입력 파일을 읽어서 줄 단위로 분리
// 5 4
// 1 2
// 3 4
// 1 4
// 2 2
const input = require('fs').readFileSync(file).toString().split('\n');

// 3. 첫 번째 줄에서 N(바구니 개수)과 M(공 바꾸는 횟수) 추출
// input[0] = "5 4" -> N = 5, M = 4
const [N, M] = input[0].split(' ').map(Number);

// 4. N개의 바구니를 초기화(처음에는 바구니 번호와 같은 공이 들어있음)
// [0, 0, 0, 0, 0].map((n, index) => index + 1) -> [1, 2, 3, 4, 5]
// 1번 바구니에 1번 공, 2번 바구니에 2번 공, ...
const baskets = new Array(N).fill(0).map((n, index) => index + 1);

// 5. M번 공 바꾸기 작업 수행
for(let i = 1; i <= M; i++){
    // 각 줄에서 바꿀 두 바구니 번호 추출
    // ex: "1 2" -> num1 = 1, num2 = 2(1번과 2번 바구니의 공을 바꿈)
    const [num1, num2] = input[i].split(' ').map(Number);
    
    // 임시 변수에 첫 번째 바구니의 공 저장
    const tmp = baskets[num1 - 1];    // num1 - 1: 바구니 번호를 배열 index로 변환
    
    // 두 바구니의 공을 서로 교환
    baskets[num1 - 1] = baskets[num2 - 1];    // 첫 번째 바구니에 두 번째 바구니의 공 넣기
    baskets[num2 - 1] = tmp;    // 두 번째 바구니에 임시 저장한 공 넣기
}

// 6. 최종 결과를 공백으로 구분하여 출력
// [3, 2, 4, 1, 5] -> "3 2 4 1 5"
console.log(baskets.join(" "));