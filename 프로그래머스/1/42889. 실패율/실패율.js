function solution(N, stages) {
    // 각 스테이지별 머물러 있는 사람 수 카운트
    const stuckCount = {};
    for (const stage of stages) {
        stuckCount[stage] = (stuckCount[stage] || 0) + 1;
    }

    const failRates = [];
    let totalPlayers = stages.length; // 현재 스테이지에 도달한 사람 수

    // 각 스테이지별 실패율 계산
    for (let stage = 1; stage <= N; stage++) {
        const stuck = stuckCount[stage] || 0; // 현재 스테이지에 머물러 있는 사람 수

        // 실패율 = 머물러 있는 사람 / 도달한 사람
        const failRate = totalPlayers === 0 ? 0 : stuck / totalPlayers;

        failRates.push({ stage, failRate });

        // 다음 스테이지 도달 인원 = 현재 - 머물러 있는 사람
        totalPlayers -= stuck;
    }

    // 실패율 내림차순 정렬, 같으면 스테이지 번호 오름차순
    failRates.sort((a, b) => {
        if (a.failRate === b.failRate) {
            return a.stage - b.stage; // 스테이지 번호 작은 순
        }
        return b.failRate - a.failRate; // 실패율 높은 순
    });

    // 스테이지 번호만 추출
    return failRates.map((item) => item.stage);
}