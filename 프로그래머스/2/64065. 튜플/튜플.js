function solution(s) {
    // 1. 문자열에서 집합들 추출
    const sets = s
        .slice(2, -2) // 앞 뒤 {{ }} 제거
        .split('},{') // },{ 기준으로 분리
        .map((set) => set.split(',').map(Number)); // 숫자 배열로

    // 2. 집합 크기 순으로 정렬 (작은 것 부터)
    sets.sort((a, b) => a.length - b.length);

    // 3. 순서대로 새로운 원소만 추가
    const result = [];
    const used = new Set();

    for (const set of sets) {
        for (const num of set) {
            if (!used.has(num)) {
                result.push(num);
                used.add(num);
                break; // 새로운 원소 하나만 추가
            }
        }
    }
    return result;
}