function solution(x) {
    // 주어진 자연수를 각각 나누어 배열로 저장
    var answer = x.toString().split("");
    let num = 0;
    for(let i=0; i<answer.length; i++){
        // 각 자리수를 더한 값을 변수 num에 저장
        num += parseInt(answer[i]);
    }
    // x와 나머지가 0이면 true 아니면 false
    return x%num === 0 ? true : false;
}