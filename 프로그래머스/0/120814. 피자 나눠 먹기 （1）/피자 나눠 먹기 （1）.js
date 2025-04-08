function solution(n) {
    var answer = 0;
    // n이 7로 나누어 떨어지지 않는 경우
    if(n % 7 != 0) {
        // 7로 나눈 몫에 1을 더하기
        // 예를 들면, n이 10이면 10/7 = 1.43... 이므로 Math.floor(1.43...) + 1 = 1 + 1 = 2
        answer = Math.floor(n/7) + 1;
    } 
    // n이 7로 나누어 떨어지는 경우
    else {
        // 7로 나눈 몫을 그래도 사용
        // 예를 들면, n이 14면 14/7 = 2 이므로 Math.floor(2) = 2
        answer = Math.floor(n/7)
    }
    return answer;
}