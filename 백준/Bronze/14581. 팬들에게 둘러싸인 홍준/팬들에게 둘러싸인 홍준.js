// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const id = require('fs').readFileSync(file).toString().trim();

// ===== 팬들에게 둘러싸인 홍준 출력
// 3×3 패턴: 가운데만 아이디, 나머지는 :fan:
console.log(':fan::fan::fan:');
console.log(`:fan::${id}::fan:`);
console.log(':fan::fan::fan:');
