// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const lambda = Number(require('fs').readFileSync(file).toString().trim());

// ===== 파장에 따른 색상 판별 =====
if (lambda >= 620 && lambda <= 780) {
    console.log('Red');
} else if (lambda >= 590 && lambda < 620) {
    console.log('Orange');
} else if (lambda >= 570 && lambda < 590) {
    console.log('Yellow');
} else if (lambda >= 495 && lambda < 570) {
    console.log('Green');
} else if (lambda >= 450 && lambda < 495) {
    console.log('Blue');
} else if (lambda >= 425 && lambda < 450) {
    console.log('Indigo');
} else if (lambda >= 380 && lambda < 425) {
    console.log('Violet');
}
