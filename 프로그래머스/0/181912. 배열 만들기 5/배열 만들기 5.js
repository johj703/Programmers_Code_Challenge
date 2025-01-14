function solution(intStrs, k, s, l) {
    var answer = [];
    let result = [];
    
    // intStrs 배열의 요소를 순회
    for(let x of intStrs) {
        // x 원소를 split을 통해 배열로 만들고 splice로 s번째부터 l까지 추출 후
        // join('')을 이용해 문자열로 다시 만들어 준 것을 result 배열에 넣어준다.
        result = Number(x.split('').splice(s, l).join(''));
        // result에서 k보다 큰 것을 answer에 넣어준다.
        if(result > k) {
            answer.push(result);
        }
    }
    return answer;
}