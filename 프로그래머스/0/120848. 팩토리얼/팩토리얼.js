function solution(n) {
    // 결과값을 저장할 변수를 초기화
    let answer = 0;
    // 팩토리얼 계산 결과를 저장할 변수를 1로 초기화(0! = 1)
    let factorial = 1;
    // 1부터 시작해서 각 i에 대한 팩토리얼을 계산
    for(let i = 1; i <= n; i++){
        // i!를 계산 - (i-1)! * i
        factorial *= i;
        // 현재 계산된 팩토리얼이 n보다 작거나 같으면
        // answer를 현재 i로 업데이트
        if(factorial <= n) {
            answer = i;
        // 팩토리얼이 n을 초과하면 반복을 중단
        // 더 이상 i!이 n보다 작거나 같을 수 없기 때문
        } else {
            // 최적화를 위한 추가 부분
            break;
        } 
    }
    return answer;
}