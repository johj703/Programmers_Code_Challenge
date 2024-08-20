function solution(n) {
    var answer = [];
    let str = String(n).split('').reverse();
    
    for(let i = 0; i < str.length; i++) {
        answer.push(parseInt(str[i]));
    }
    return answer;
}