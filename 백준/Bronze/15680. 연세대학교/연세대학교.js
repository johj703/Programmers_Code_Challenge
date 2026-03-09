// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const N = Number(require('fs').readFileSync(file).toString().trim());

// ===== 조건에 따라 출력 =====
// N: 0: 영문명 출력
// N: 1: 슬로건 출력
if (N === 0) {
    console.log('YONSEI');
} else {
    console.log('Leading the Way to the Future');
}
