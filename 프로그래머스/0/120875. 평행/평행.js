function solution(dots) {
    // 두 점을 이은 직선의 기울기를 계산하는 함수
    const getSlope = (p1, p2) => {
        return (p1[1] - p2[1]) / (p1[0] - p2[0]);
    };
    
    // 4개의 점을 2개씩 묶어서 두 직선을 만드는 방법은 3가지다.
    
    // 조합1: (점0, 점1)과 (점2, 점3)의 기울기 비교
    if(getSlope(dots[0], dots[1]) === getSlope(dots[2], dots[3])) return 1;
    
    // 조합2: (점0, 점2)과 (점1, 점3)의 기울기 비교
    if(getSlope(dots[0], dots[2]) === getSlope(dots[1], dots[3])) return 1;
    
    // 조합3: (점0, 점3)과 (점1, 점2)의 기울기 비교
    if(getSlope(dots[0], dots[3]) === getSlope(dots[1], dots[2])) return 1;
    
    // 어떤 조합에서도 평행한 직선이 없으면 0 반환
    return 0;
}