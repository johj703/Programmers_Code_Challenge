function solution(n) {
    // 순서쌍을 저장할 배열을 초기화
    const result = [];
    // 1부터 n까지 반복하며 약수를 찾기
    for(let i = 1; i <= n; i++){
        // i가 n의 약수인지 확인
        if(n%i === 0) {
            // 약수면 (i, n/i) 순서쌍을 추가
            result.push([i, n/i]);
        }
    }
    return result.length;
}