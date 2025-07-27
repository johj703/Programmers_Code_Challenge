// 1. 플랫폼에 따른 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
let fs = require("fs");
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

// 2. 서로 다른 나머지 값들을 저장할 배열 선언
let arr = [];

// 3. 입력받은 10개 숫자를 하나씩 처리
input.forEach((x) => {
    // 각 숫자를 42로 나눈 나머지 계산
    const num = x % 42;
    
    // 해당 나머지가 이미 배열에 있는지 확인
    // indexOf()가 -1을 반환하면 배열에 없다는 의미
    if(arr.indexOf(num) === -1){
        // 없으면 배열에 추가
        arr.push(num);
    }
})

// 4. 서로 다른 나머지의 개수 출력
console.log(arr.length);