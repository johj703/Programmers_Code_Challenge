function solution(arr, query) {
    // 원본 배열(arr) 복사
    let result = [...arr];
    
    // query 배열의 각 요소를 순회
    query.forEach((v, i) => {
        // 짝수 index인 경우
        if(i % 2 === 0) {
            // query[i] + 1 위치부터 끝까지 제거
            result.splice(query[i] + 1)
            // 홀수 index인 경우
        } else {
            // 처음부터 query[i]개의 요소 제거
            result.splice(0, query[i])
        }
    })
    return result;
}