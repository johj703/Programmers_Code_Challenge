function solution(n, k) {
    let answer = 0;
    // 10인분 이상 주문 시 서비스 음료수 계산
    if(n >= 10) {
        // 10인분 당 1개의 음료수가 서비스로 제공
        k -= Math.floor(n/10);
        // 음료수 개수가 음수가 되지 않도록 보장(서비스로 제공된 음료수가 원래 주문보다 많을 경우)
        if(k < 0) k = 0;
    }
    // 총 금액 계산: 양꼬치(12,000원/인분) + 음료수(2,000원/개)
    answer = n * 12000 + k * 2000;
    return answer;
}