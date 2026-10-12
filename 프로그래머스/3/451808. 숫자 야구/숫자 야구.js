/**
 * @param {number} n - 제출 가능한 최대 횟수 예산 (이 풀이는 최악 6번에 정답을 찾으므로 n ≥ 6이면 통과)
 * @param {function} submit - 시스템이 제공하는 제출 API. submit(guess) 형태로 호출하며 "xS yB" 문자열 반환
 * @return {number} - 최종적으로 알아낸 4자리 비밀번호 정수
 */
function solution(n, submit) {
    // 1. 태초의 1~9 서로 다른 숫자 4개로 이루어진 3,024개의 후보 풀 생성
    let candidates = makeCandidates();
    let isFirstTurn = true; // 첫 번째 턴인지 판별하기 위한 플래그

    // 미니맥스 탐색 방식: 후보가 1개로 좁혀지거나 정답을 맞출 때까지 루프 가동
    while (candidates.length > 0) {
        // 예외 처리 - 만약 후보가 딱 1개가 남았다면 즉시 그 수가 정답
        if (candidates.length === 1) {
            return candidates[0];
        }

        let guess;

        if (isFirstTurn) {
            // 첫 번째 턴은 연산량 5초 병목을 없애기 위해 묻지도 따지지도 않고 최적의 수 1123으로 박제
            guess = 1123;
            isFirstTurn = false;
        } else if (candidates.length <= 2) {
            // 남은 후보가 2개 이하일 때는 9,000개를 다 훑을 필요 없이 생존 후보 중 첫 번째 것을 내는 것이 훨씬 빠름
            guess = candidates[0];
        } else {
            // 그 외 둘째 턴 이후부터는 1000~9999 중 최악의 단서 조각 크기를 최소화하는 최적의 수를 계산해냄
            guess = pickBestGuess(candidates);
        }

        // 시스템에 추측 값을 제출하고 단서를 획득
        const clue = submit(guess);

        // 완벽한 정답 신호인 "4S 0B"를 받으면 즉시 리턴
        if (clue === '4S 0B') {
            return guess;
        }

        // 단서와 모순되는 후보들을 걸러내서 풀을 실시간으로 압축 업데이트 진행
        candidates = filterCandidates(candidates, guess, clue);
    }
}

//--------------------------------------------------------------------------------------------------------------------
// 미니맥스 핵심 탐색 함수
/**
 * 📌 1000~9999 전체 탐색 공간에서 최악의 경우 남는 후보의 크기가 가장 작아지는 최선의 guess 선별
 */

function pickBestGuess(candidates) {
    let bestGuess = -1;
    let minMaxCount = Infinity; // 최악의 조각 크기 중 최소값을 추적

    // 바깥 반복: 0이 들어가거나 숫자가 중복되어도 제출 가능하므로 1000부터 9999까지 전체 시도
    for (let guess = 1000; guess <= 9999; guess++) {
        // 각 단서 문자열("1S 2B" 등)의 묶음 크기를 세어줄 해시 Map 객체 생성
        const clueMap = new Map();

        // 안쪽 반복: 현재 생존해 있는 후보 p들을 순회하며 단서별 분기 카운팅 집계
        for (let p of candidates) {
            const clue = getClue(guess, p);
            clueMap.set(clue, (clueMap.get(clue) || 0) + 1);
        }

        // 현재 guess가 감당해야 하는 단서 조각 중 가장 큰 '최악의 묶음 크기' 산출
        let currentMaxCount = 0;
        for (let count of clueMap.values()) {
            if (count > currentMaxCount) {
                currentMaxCount = count;
            }
        }

        // 미니맥스 최소값 갱신 연산: 최악의 리스크(최대 조각)가 지금까지보다 더 작아진다면 최선의 guess로 갱신
        if (currentMaxCount < minMaxCount) {
            minMaxCount = currentMaxCount;
            bestGuess = guess;
        }
    }

    return bestGuess;
}

//--------------------------------------------------------------------------------------------------------------------
/**
 * 📌 자리별 한 번의 루프로 위치 일치(Strike)와 포함 여부(Ball)를 정밀 필터링하는 단서 도출 함수
 */
function getClue(guess, secret) {
    const gStr = String(guess);
    const sStr = String(secret);

    let strike = 0;
    let ball = 0;

    // 자리별 스캔: 위치와 숫자가 완벽히 일치하는 스트라이크(S) 선점
    for (let i = 0; i < 4; i++) {
        if (gStr[i] === sStr[i]) {
            // 1. 자리가 완벽하게 일치하면 스트라이크
            strike++;
        } else if (sStr.includes(gStr[i])) {
            // 2. 자리는 다르지만 비밀번호 문자열 어딘가에 포함되어 있다면 볼!
            ball++;
        }
    }

    return `${strike}S ${ball}B`;
}

//--------------------------------------------------------------------------------------------------------------------
/**
 * 📌 1~9 사이의 서로 다른 숫자 4개로 조합된 태초의 3,024개 순열 후보 배열 생성기
 */
function makeCandidates() {
    const candidates = [];

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            if (a === b) continue;
            for (let c = 1; c <= 9; c++) {
                if (a === c || b === c) continue;
                for (let d = 1; d <= 9; d++) {
                    if (a === d || b === d || c === d) continue;

                    // 4자리 정수로 조합하여 후보 목록 주입
                    candidates.push(a * 1000 + b * 100 + c * 10 + d);
                }
            }
        }
    }
    return candidates;
}

//--------------------------------------------------------------------------------------------------------------------

/**
 * 📌 가상 단서가 실제 받은 clue와 완벽히 일치하는 유효 후보만 살리는 압축 필터링 함수
 */
function filterCandidates(candidates, guess, clue) {
    return candidates.filter((p) => getClue(guess, p) === clue);
}
