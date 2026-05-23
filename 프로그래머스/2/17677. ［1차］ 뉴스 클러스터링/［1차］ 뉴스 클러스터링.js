function solution(str1, str2) {
    // 1. 다중집합 만들기 (2글자씩 끊기, 영문자만)
    const getMultiSet = (str) => {
        const result = [];
        for (let i = 0; i < str.length - 1; i++) {
            const pair = str.slice(i, i + 2).toLowerCase();
            // 영문자 2개인지 확인
            if (/^[a-z]{2}$/.test(pair)) {
                result.push(pair);
            }
        }
        return result;
    };

    const set1 = getMultiSet(str1);
    const set2 = getMultiSet(str2);

    // 2. 둘 다 공집합이면 유사도 1 (65536 반환)
    if (set1.length === 0 && set2.length === 0) {
        return 65536;
    }

    // 3. 각 원소의 개수를 Map으로 저장
    const map1 = new Map();
    const map2 = new Map();

    for (const elem of set1) {
        map1.set(elem, (map1.get(elem) || 0) + 1);
    }
    for (const elem of set2) {
        map2.set(elem, (map2.get(elem) || 0) + 1);
    }

    // 4. 교집합과 합집합 크기 계산
    let intersection = 0; // 교집합: min(count1, count2);
    let union = 0; // 합집합: max(count1, count2);

    // 모든 원소에 대해 계산
    const allKeys = new Set([...map1.keys(), ...map2.keys()]);

    for (const key of allKeys) {
        const count1 = map1.get(key) || 0;
        const count2 = map2.get(key) || 0;

        intersection += Math.min(count1, count2);
        union += Math.max(count1, count2);
    }

    // 5. 자카드 유사도 계산 및 65536 곱하기
    const jaccard = intersection / union;

    return Math.floor(jaccard * 65536);
}