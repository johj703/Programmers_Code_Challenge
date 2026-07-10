function solution(info, query) {
    const map = new Map();

    // 1. 모든 지원자에 대해 2^4=16가지 키 조합으로 Map 구성
    for (const i of info) {
        const [lang, job, career, food, score] = i.split(' ');
        const attrs = [lang, job, career, food];

        // 각 항목을 실제 값 or '-'로 대체하는 16가지 조합
        for (let mask = 0; mask < 16; mask++) {
            const key = attrs
                .map((attr, idx) => (mask & (1 << idx) ? '-' : attr))
                .join('');

            if (!map.has(key)) map.set(key, []);
            map.get(key).push(Number(score));
        }
    }

    // 2. 각 키의 점수 배열을 오름차순 정렬 (이진탐색 준비)
    for (const scores of map.values()) {
        scores.sort((a, b) => a - b);
    }

    // 3. 이진탐색: X점 이상인 사람 수 찾기
    const lowerBound = (scores, target) => {
        let left = 0,
            right = scores.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (scores[mid] < target) left = mid + 1;
            else right = mid;
        }
        return scores.length - left; // X점 이상인 사람의 수
    };

    // 4. 각 쿼리에 대해 답 계산
    return query.map((q) => {
        const parts = q.split(' ');
        // "java and backend and junior and pizza 100"
        // → [java, and, backend, and, junior, and, pizza, 100]
        // → 인덱스 0,2,4,6이 조건값, 7이 점수
        const key = [parts[0], parts[2], parts[4], parts[6]].join('');
        const score = Number(parts[7]);

        if (!map.has(key)) return 0;
        return lowerBound(map.get(key), score);
    });
}