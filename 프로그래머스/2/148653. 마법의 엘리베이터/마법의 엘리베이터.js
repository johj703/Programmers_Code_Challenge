function solution(storey) {
    let result = 0;
    
    while(storey) {
        // 현재 자리수
        let cur = storey % 10;
        
        // 다음 자리수
        let next = (storey / 10) %10;
        
        // 5보다 큰 경우
        if(cur > 5) {
            // 결과 값에 + 10 - cur
            result += 10 - cur;
            // 다음 자리 수 + 1
            storey += 10;
            // 5와 같은 경우
        } else if(cur === 5) {
            result += cur;
            // 다음 자리 수가 5보다 크면 +1
            storey += next >= 5 ? 10 : 0;
            // 5보다 작은 경우
        } else {
            result += cur;
        }
        // 자리 수를 변경하여 탐색
        storey = parseInt(storey / 10);
    }
    return result;
}