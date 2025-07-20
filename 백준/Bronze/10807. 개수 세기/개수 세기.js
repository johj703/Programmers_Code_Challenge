// 입력 파일을 읽어서 줄 단위로 나누기
// 예제 입력:
// 11
// 1 4 1 2 4 2 4 2 3 4 4
// 2
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// input[0] = "11"
// input[1] = "1 4 1 2 4 2 4 2 3 4 4"
// input[2] = "2"

// 두 번째 줄(input[1])에서 숫자들을 추출해서 배열 만들기
// "1 4 1 2 4 2 4 2 3 4 4" => [1, 4, 1, 2, 4, 2, 4, 2, 3, 4, 4]
let list = input[1].split(' ').map(Number);

// 세 번째 줄(input[2])에서 찾을 숫자 가져오기
// input[2] = "2" => 숫자 2
// v = 2
let v = Number(input[2]);

// 배열에서 v(=2)와 같은 숫자들만 찾아서 개수 세기
// [1, 4, 1, 2, 4, 2, 4, 2, 3, 4, 4]에서 2와 같은 것들 -> [2, 2, 2]
// 길이 = 3개
let result = list.filter((num) => num == v).length;

// 결과 출력(= 3)
console.log(result);