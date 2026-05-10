function solution(friends, gifts) {
    const n = friends.length;

    // 친구 이름 -> index 매핑
    const nameToIdx = new Map();
    friends.forEach((name, idx) => {
        nameToIdx.set(name, idx);
    });

    // 선물 기록 테이블(giftTable[i][j] = i가 j에게 준 선물 수)
    const giftTable = Array(n)
        .fill(0)
        .map(() => Array(n).fill(0));

    // 선물 지수 (준 선물 -> 받은 선물)
    const giftScore = Array(n).fill(0);

    // 선물 기록 처리
    for (const gift of gifts) {
        const [giver, receiver] = gift.split(' ');
        const giverIdx = nameToIdx.get(giver);
        const receiverIdx = nameToIdx.get(receiver);

        giftTable[giverIdx][receiverIdx]++;
        giftScore[giverIdx]++; // 준 선물 증가
        giftScore[receiverIdx]--; // 받은 선물 증가 (음수)
    }

    // 다음 달에 받을 선물 개수
    const nextMonth = Array(n).fill(0);

    // 모든 친구 쌍 확인 (i < j로 중복 방지)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const iToJ = giftTable[i][j]; // i가 j에게 준 선물
            const jToI = giftTable[j][i]; // j가 i에게 준 선물

            if (iToJ > jToI) {
                // i가 더 많이 줬으므로 i가 받음
                nextMonth[i]++;
            } else if (jToI > iToJ) {
                // j가 더 많이 줬으므로 j가 받음
                nextMonth[j]++;
            } else {
                // 주고받은 수가 같거나 없음 -> 선물 지수 비교
                if (giftScore[i] > giftScore[j]) {
                    nextMonth[i]++;
                } else if (giftScore[j] > giftScore[i]) {
                    nextMonth[j]++;
                }
                // 선물 지수도 같으면 아무도 안 받음
            }
        }
    }
    // 가장 많이 받는 사람의 선물 개수 반환
    return Math.max(...nextMonth);
}