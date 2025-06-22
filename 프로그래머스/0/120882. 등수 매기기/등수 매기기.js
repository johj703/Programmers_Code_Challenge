function solution(score) {
    // 각 학생의 평균 점수 계산
    const average = score.map(([eng, math]) => (eng + math) / 2);
    // 평균 점수를 내림차순으로 정렬(높은 점수부터)
    const sortedAverage = [...average].sort((a, b) => b - a);
    // 각 학생의 등수를 저장할 배열
    let ranks = [];
    
    // 각 학생의 평균 점수에 해당하는 등수 찾기
    average.forEach((avg) => {
        // 정렬된 배열에서 해당 평균의 첫 번째 index + 1이 등수
        const rank = sortedAverage.indexOf(avg) + 1;
        ranks.push(rank);
    });
    
    return ranks;
}