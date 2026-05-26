function solution(prices) {
    const answer = new Array(prices.length).fill(0); // O(N) 공간
    const stack = []; // O(N) 공간 (최악의 경우)

    for (let i = 0; i < prices.length; i++) {
        // 가격이 떨아진 시점 찾기
        while (
            stack.length > 0 &&
            prices[stack[stack.length - 1]] > prices[i]
        ) {
            const j = stack.pop();
            answer[j] = i - j; // j 시점부터 i 시점까지의 시간
        }
        stack.push(i);
    }

    // 끝까지 가격이 떨어지지 않은 경우
    while (stack.length > 0) {
        const j = stack.pop();
        answer[j] = prices.length - 1 - j;
    }

    return answer;
}