function solution(A, B) {
    // A는 오름차순, B는 내림차순 정렬
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    // 작은 수 × 큰 수로 매칭하여 합 최소화
    let answer = 0;
    for (let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }

    return answer;
}