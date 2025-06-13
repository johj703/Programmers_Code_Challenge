function solution(sides) {
    // 가능한 나머지 한 변의 길이들을 저장할 배열
    let answer = [];
    
    // 주어진 두 변 중 짧은 변과 긴 변
    let n = Math.min(...sides);
    let m = Math.max(...sides);
    
    // 경우 1: 기존 변 중 m이 가장 긴 변인 경우의 시작 값
    let a = m - n;
    // 경우 2: 새로운 변이 가장 긴 변인 경우의 시작 값
    let b = m;
    
    // 경우 1: m이 가장 긴 변일 때(삼각형 조건: m < n + 새로운 변)
    // 즉, 새로운 변 > m - n이고 새로운 변 <= m
    while(a < m) {
        a++;
        answer.push(a);
    }
    
    // 경우 2: 새로운 변(b)이 가장 긴 변일 때(삼각형 조건: 새로운 변 < m + n)
    // 즉, 새로운 변 > m 이고 새로운 변 < m + n
    while(b < m + n - 1) {
        b++;
        answer.push(b);
    }
    
    // 가능한 나머지 한 변의 개수 반환
    return answer.length;
}