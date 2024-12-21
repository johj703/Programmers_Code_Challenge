function solution(weights) {
    const map = {};
    // 비율 배열
    const ratio = [1, 3 / 2, 4/ 3, 2]
    
    // 무게를 내림차순 정렬 후 reduce로 합산
    return weights
        .sort((a, b) => b - a)
        .reduce((result, weight) => {
            // 해당 무게의 비율을 곱하여 result에 합산
            ratio.map((v) => (result += map[weight * v] || 0));
        
        // 해당 무게의 등장 회수 1 증가
        map[weight] = (map[weight] || 0) + 1;
        return result;
    }, 0);
}