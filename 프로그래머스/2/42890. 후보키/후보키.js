function solution(relation) {
    const rowCount = relation.length;
    const colCount = relation[0].length;
    const candidateKeys = []; // 찾은 후보키(비트마스크)들

    // 1번부터 (2^colCount - 1)까지 모든 컬럼 조합 시도
    for (let mask = 1; mask < 1 << colCount; mask++) {
        // 유일성 체크: 해당 컬럼 조합으로 만든 키가 모두 다른지 확인
        const keySet = new Set();
        for (const row of relation) {
            const key = [];
            for (let c = 0; c < colCount; c++) {
                if (mask & (1 << c)) key.push(row[c]); // 해당 비트의 컬럼값 추출
            }
            keySet.add(key.join('|'));
        }

        // 유일성 실패 -> 다음 조합으로 시도
        if (keySet.size !== rowCount) continue;

        // 최소성 체크: 이미 찾은 후보키 중 현재 조합에 부분집합이 있는가?
        const isMinimal = candidateKeys.every((ck) => (ck & mask) !== ck);
        //                                         ↑
        // ck가 mask의 부분집합이면 (ck & mask) === ck
        // 부분집합이 없어야 최소성 만족!
        if (isMinimal) candidateKeys.push(mask); // 후보키로 추가
    }
    return candidateKeys.length;
}