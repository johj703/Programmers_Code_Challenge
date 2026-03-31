// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 줄바꿈으로 분리
const input = require('fs').readFileSync(file).toString().trim().split('\n');

// N: 신청한 세미나의 수
const N = Number(input[0]);

// ===== 세미나-교실 매핑 =====
const classrooms = {
    'Algorithm': '204',
    'DataAnalysis': '207',
    'ArtificialIntelligence': '302',
    'CyberSecurity': 'B101',
    'Network': '303',
    'Startup': '501',
    'TestStrategy': '105',
};

// ===== 각 세미나의 교실 출력 =====
for (let i = 1; i <= N; i++) {
    const seminar = input[i].trim();
    console.log(classrooms[seminar]);
}
