function solution(n) {
    // n이 주어질 때 초기 값이 n이기 때문에 answer에 n을 넣는다.
    var answer = [n];
    // answer에 초기 값을 넣었기 때문에 answer에 넣어줄 val의 값의 초기값도
    // answer이 짝수인지 홀수인지에 따라 값이 달라진다.
    let val = n%2 === 0 ? n/2 : 3 * n + 1;
    // val이 1이 될 때까지 반복
    while(val !== 1) {
        // 처음 val의 값을 answer에 넣어주고 시작
        answer.push(val);
        // x가 짝수일 때 2로 나누고, x가 홀수일 때는 3 * x + 1로 바꾸는
        // 식을 만들어서 val에 넣어주기
        if(val % 2 === 0) {
            val /= 2;
        } else {
            val = 3 * val + 1;
        }
    }
    // 1은 마지막에 따로 answer에 넣어준다.
    answer.push(1)
    return answer;
}