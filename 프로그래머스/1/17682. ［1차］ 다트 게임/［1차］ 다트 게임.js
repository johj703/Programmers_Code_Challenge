// ===== 프로그래머스 "[1차] 다트 게임" (레벨1) =====
// https://school.programmers.co.kr/learn/courses/30/lessons/17682
// 풀이일: 2026-04-21

// ===== 정답 코드 =====
// 시간 복잡도: O(1) - Big-O, 항상 3번의 기회만 처리
// 공간 복잡도: O(1) - Big-O, 최대 3개의 점수만 저장

function solution(dartResult) {
    const scores = [];
    // 정규식: (숫자)(보너스)(옵션?)
    const matches = dartResult.matchAll(/(\d+)([SDT])([*#]?)/g);

    for (const match of matches) {
        const [_, score, bonus, option] = match;
        let point = parseInt(score);

        // 보너스 적용(S: 1제곱, D: 2제곱, T: 3제곱)
        if (bonus === 'D') point = point ** 2;
        else if (bonus === 'T') point = point ** 3;

        scores.push(point);

        // 옵션 적용
        const idx = scores.length - 1;
        if (option === '*') {
            // 스타상: 현재와 이전 점수 2배
            scores[idx] *= 2;
            if (idx > 0) scores[idx - 1] *= 2;
        } else if (option === '#') {
            // 아차상: 현재 점수 마이너스
            scores[idx] *= -1;
        }
    }
    // 총점 계산
    return scores.reduce((sum, score) => sum + score, 0);
}

// ===== 테스트 코드 =====
/* 
console.log(solution('1S2D*3T'));
console.log(solution('1D2S#10S'));
console.log(solution('1D2S0T'));
console.log(solution('1S*2T*3S'));
console.log(solution('1D#2S*3S'));
console.log(solution('1T2D3D#'));
console.log(solution('1D2S3T*'));
*/
