// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력 파일을 읽고 문자열 변환 후, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
const [n, m, k] = require('fs')
    .readFileSync(file)
    .toString()
    .trim()
    .split(' ')
    .map(Number);

/* 
    n: 전체 컴퓨터 대수
    m: 각 컴퓨터에 설치해야 할 에디터 개수
    k: 도훈이가 수동으로 설치를 완료한 컴퓨터 대수
*/

// ===== 총 설치 횟수 계산 =====

/*
    1. 도훈이가 설치한 횟수
    k대의 컴퓨터 각각에 에디터 m개를 하나하나 설치
    총 설치 횟수 = k × m;
*/
const dohunInstalls = k * m;

/*
    2. 차형준 선생님이 설치한 횟수
    별도의 노트북에 에디터 m개를 하나씩 설치(m번)
    그 후 매크로를 작동시켜 모든 컴퓨터에 일괄 설치(매크로는 세지 않음)
    총 설치 횟수 = m
*/
const teacherInstalls = m;

// 3. 전체 설치 횟수
const totalInstalls = dohunInstalls + teacherInstalls;

// ===== 결과 출력 =====
console.log(totalInstalls);
