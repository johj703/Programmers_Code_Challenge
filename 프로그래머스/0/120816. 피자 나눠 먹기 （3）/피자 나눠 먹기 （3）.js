function solution(slice, n) {
    // 피자 판 수를 1로 초기화
    let i = 1;
    // 현재 피자 판 수로 얻을 수 있는 총 조각 수가 사람 수보다 적은 동안 반복
    while(slice * i < n) {
        // 피자 판 수를 1 증가
        i++;
    }
    // 모든 사람이 최소 한 조각 이상 먹을 수 있는 최소 피자 판 수를 반환
    return i;
}