function solution(picks, minerals) {
    // 피로도 표 [곡괭이][광물]
    const fatigue = [
        [1, 1, 1], // 다이아몬드 곡괭이
        [5, 1, 1], // 철 곡괭이
        [25, 5, 1], // 돌 곡괭이
    ];

    // 광물 index 매핑
    const mineralIdx = { diamond: 0, iron: 1, stone: 2 };

    // 총 곡괭이 수
    const totalPicks = picks.reduce((sum, p) => sum + p, 0);

    // 5개씩 그룹으로 나누기 (최대 totalPicks 그룹)
    const groups = [];
    for (let i = 0; i < Math.min(totalPicks * 5, minerals.length); i += 5) {
        const group = minerals.slice(i, i + 5);
        const counts = [0, 0, 0]; // [dia, iron, stone] 개수
        for (const m of group) {
            counts[mineralIdx[m]]++;
        }
        groups.push(counts);
    }

    // 가중치 내림차순 정렬 (다이아몬드 많은 그룹 우선)
    groups.sort((a, b) => {
        const weightA = a[0] * 25 + a[1] * 5 + a[2];
        const weightB = b[0] * 25 + b[1] * 5 + b[2];
        return weightB - weightA;
    });

    // 좋은 곡괭이부터 할당하여 피로도 계산
    let totalFatigue = 0;
    let pickIdx = 0; // 현재 곡괭이 종류 (0: 다이아, 1: 철, 2: 돌)

    for (const group of groups) {
        // 사용 가능한 곡괭이 찾기
        while (pickIdx < 3 && picks[pickIdx] === 0) pickIdx++;
        if (pickIdx >= 3) break;

        // 피로도 계산
        for (let i = 0; i < 3; i++) {
            totalFatigue += fatigue[pickIdx][i] * group[i];
        }

        picks[pickIdx]--; // 곡괭이 1개 사용
    }
    return totalFatigue;
}