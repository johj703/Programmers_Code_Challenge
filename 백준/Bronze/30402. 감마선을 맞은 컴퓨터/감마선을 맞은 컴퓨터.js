// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// ===== 고양이 사진 분류 =====
// 15줄의 픽셀 데이터를 하나의 문자열로 합치기
let allPixels = '';
for (let i = 0; i < 15; i++) {
    allPixels += input[i];
}

// 각 고양이 색깔 확인
if (allPixels.includes('w')) {
    // 하안색(w) 존재 -> 춘배
    console.log('chunbae');
} else if (allPixels.includes('b')) {
    // 검은색(b) 존재 -> 나비
    console.log('nabi');
} else if (allPixels.includes('g')) {
    // 회색(g) 존재 -> 영철
    console.log('yeongcheol');
}
