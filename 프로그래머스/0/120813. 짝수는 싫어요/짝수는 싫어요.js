function solution(n) {
    // 결과를 저장할 빈 배열을 생성
    var answer = [];
    
    // 1부터 n까지 반복
    for(let i = 1; i <= n; i++) {
        // 현재 숫자가 홀수인지 확인
        // i를 2로 나눈 나머지가 0이 아니면 홀수
        if(i % 2 != 0) {
            // 홀수인 경우 answer 배열에 추가
            answer.push(i);
        }
    }
    return answer;
}