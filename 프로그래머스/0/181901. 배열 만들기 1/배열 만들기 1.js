function solution(n, k) {
    // 결과를 저장할 빈 배열 초기화
    let result = [];
    
    // 1부터 n까지 반복
    for(let i = 1; i <= n; i++) {
        // i가 k로 나누어 떨어지면(k의 배수이면) 배열에 추가
        if(i % k === 0) {
            result.push(i);
        }
    }
    return result;
}