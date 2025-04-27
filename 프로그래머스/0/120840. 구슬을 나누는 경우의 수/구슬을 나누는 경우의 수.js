function solution(balls, share) {
    // answer의 초기값을 1로 설정
    // 조합 계산에서는 곱셈을 사용하기 때문에 곱셈의 항등원인 1로 시작해야 함.
    // 0으로 시작하면 어떤 수를 곱해도 결과는 항상 0이 되기 때문
    let answer = 1;
    
    // share번 반복하면서 조합을 계산.
    while (share) {
        // 조합 공식의 분자와 분모를 동시에 계산
        // 분자: balls, balls-1, balls-2, ...
        // 분모: share, share-1, share-2, ...
        // 각 단계에서 분자/분모 값을 곱해나감
        answer *= balls / share;
        
        // 다음 반복을 위해 balls와 share를 감소
        balls--;
        share--;
    }
    // 부동소수점 계산으로 인한 작은 오차를 보정하기 위해 반올림을 해야 함.
    // ex = 10이 나와야 하는 계산에서 9.9999나 10.000001 같은 결과가 나올 수 있음.
    // 조합의 결과는 항상 정수이므로, Math.round()로 가장 가까운 정수로 반올림을 함.
    return Math.round(answer);
}