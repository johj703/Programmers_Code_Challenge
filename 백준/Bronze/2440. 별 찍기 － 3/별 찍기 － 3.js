// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const N = Number(require('fs').readFileSync(file).toString().trim());

// ===== 별 찍기 =====
// N개부터 시작해서 1개까지 감소하며 출력
for (let i = N; i >= 1; i--) {
    /*
        repeat 함수: 문자열을 주어진 횟수만큼 반복
        '*'.repeat(i) -> '*'를 i번 반복한 문자열 생성

        ex: i = 5일때
        '*'.repeat(5) -> '*' + '*' + '*' + '*' + '*' => '*****'
        ...
        ex: i = 3일때
        '*'.repeat(3) -> '*' + '*' + '*' => '***'
        ... 
        ex: i = 1일때
        '*'.repeat(1) -> '*' => '*'
        ... 
    */
    console.log('*'.repeat(i));
}
