function solution(n, t) {
    // 1시간부터 t시간까지 반복(총 t번 반복)
    for(let i = 1; i <= t; i++){
        // 매 시간마다 세균 수가 2배씩 증가
        n *= 2;
    }
    // t시간 후의 최종 세균 수를 반환
    return n;
}