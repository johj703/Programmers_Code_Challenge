function solution(s) {
    if(s.length%2 == 0) {
        //짝수
        return s.substr(s.length/2-1,2)
    } else {
        //홀수
        return s.substr(s.length/2,1)
    }
}

console.log(solution('123456789'))  // 5

//삼항조건연산자
function solution(s) {
    return s.length % 2 == 0 ? s.substr(s.length / 2 - 1,2) : s.substr(s.length / 2, 1)
}