function solution(my_string, queries) {
    // 1. my_string을 배열로 answer에 넣어줌
        var answer = my_string.split('');
        let result = '';
    
    // 2. queries를 for...of문으로 순환
        for(let x of queries) {
            let num = x[1] - x[0];
    
    // 3. result에 answer배열에서 x[0]의 수부터 x[1]+1까지의 수를
    // reverse로 거꾸로 바꿔서 넣어준다.
        result = answer.slice(x[0], x[1] + 1).reverse();
    
    // 4. answer의 x[0] 인덱스부터 num개를 삭제한다.
        answer.splice(x[0], num + 1);
    
    // 5. answer에 x[0] 인덱스에 result를 넣어준다.
    // '...result'가 아닌 'result'를 넣어주면
    // ['s', 'p', 'r', 'o', 'g', ['m' , 'r' ], 'e', 'r'] 이렇게 들어가기에
    // ...result해서 넣어준다.
        answer.splice(x[0], 0, ...result);
    }
    // 6. 배열 answer를 문자열로 바꿔줌.
    return answer.join('');
}