function solution(enroll, referral, seller, amount) {
    // ----- 1. 판매원 -> 추천인 매핑, 이익 누적용 맵 초기화 -----
    const parent = {};
    const profit = {};

    for (let i = 0; i < enroll.length; i++) {
        parent[enroll[i]] = referral[i];
        profit[enroll[i]] = 0;
    }

    // ----- 2. 재귀적으로 이익을 분배하는 함수 -----
    const distribute = (name, money) => {
        // "추천인이 없거나(-), 분배할 금액이 0이면" 종료
        if (name === '-' || money === 0) return;

        // "10%를 계산(원 단위 절사)" - 정수 나눗셈으로 자동 절사됨
        const share = Math.floor(money / 10);

        if (share < 1) {
            // "10%가 1원 미만이면" 전액 자신이 갖고 전파 종료
            profit[name] += money;
        } else {
            // "나머지 90%는 자신이 갖고, 10%는 추천인에게 재귀적으로 전달"
            profit[name] += money - share;
            distribute(parent[name], share);
        }
    };

    // ----- 3. 모든 판매 건에 대해 이익 분배 실행 -----
    for (let i = 0; i < seller.length; i++) {
        distribute(seller[i], amount[i] * 100); // 칫솔 1개당 100원
    }

    // ----- 4. enroll에 등장한 순서대로 결과 반환 -----
    return enroll.map((name) => profit[name]);
}