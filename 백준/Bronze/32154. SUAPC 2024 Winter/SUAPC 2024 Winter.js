// ===== 정답 코드 =====
/*
    시간 복잡도: O(1) - Big-O 표기법, 배열 Index 접근
    공간 복잡도: O(1) - Big-O 표기법, 고정된 데이터
*/

// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거
const N = Number(require('fs').readFileSync(file).toString().trim());

// ===== SUAPC 2024 Winter 스코어보드 데이터 =====
const rankings = [
    null, // 0번 Index는 사용하지 않으므로 null로 처리
    { count: 11, problems: 'A B C D E F G H J L M' }, // 1위: AKARAKA
    { count: 9, problems: 'A C E F G H I L M' }, // 2위: goraani
    { count: 9, problems: 'A C E F G H I L M' }, // 3위: Raa_FanClub
    { count: 9, problems: 'A B C E F G H L M' }, // 4위: 입대 전 라스트댄스
    { count: 8, problems: 'A C E F G H L M' }, // 5위: 진짜1등하러왔습니다
    { count: 8, problems: 'A C E F G H L M' }, // 6위: 돈비고고
    { count: 8, problems: 'A C E F G H L M' }, // 7위: 가지오이당근
    { count: 8, problems: 'A C E F G H L M' }, // 8위: 병공병
    { count: 8, problems: 'A C E F G H L M' }, // 9위: 기령손
    { count: 8, problems: 'A B C F G H L M' }, // 10위: 홍하예프
];

// ===== 결과 출력 =====
console.log(rankings[N].count);
console.log(rankings[N].problems);
