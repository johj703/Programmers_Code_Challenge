function solution(price) {
    // 50만원 이상 구매: 20% 할인
    if(price >= 500000) {
        // 원래 가격의 80%만 지불
        return Math.floor(price * 0.8)
    }
    // 30만원 이상 50만원 미만 구매: 10% 할인
    else if(price >= 300000) {
        // 원래 가격의 90%만 지불
        return Math.floor(price * 0.9)
    }
    // 10만원 이상 30만원 미만 구매: 5% 할인
    else if(price >= 100000) {
        // 원래 가격의 95%만 지불
        return Math.floor(price * 0.95)
    }
    // 10만원 미만 구매: 할인 없음
    else {
        // 원래 가격 그대로 지불
        return price;
    }
}