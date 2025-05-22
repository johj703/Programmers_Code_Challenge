function solution(n) {
    // 약수를 저장할 배열을 초기화
    var answer = [];
    
    // 1부터 n까지의 모든 수를 순회
    // 0으로 나누면 오류가 발생하므로 1부터 시작
    for(let i = 1; i <= n; i++) {
        // n을 i로 나눈 나머지가 0이면 i는 n의 약수
        if(n % i === 0) {
            // 약수를 배열에 추가
            answer.push(i)
        }
    }
    // 1부터 n까지 순서대로 확인했으므로 자동으로 오름차순으로 정렬이 됨
    return answer;
}