function solution(arr, queries) {
    let answer = [];
    for(let [s, e, k] of queries){
        // v = 요소 값, i = 순회하는 인덱스
        // 작은 것부터 나열해준 다음 제일 작은 0번째 인덱스를 temp에 넣기
        let temp = arr.filter((v, i) => (i >= s && i <= e && v > k)).sort((a,b) => a - b)[0];
        // temp가 undefined가 아니면 temp값을, undefined면 -1을 Push
        // undefined는 falsy한 값이므로 조건문에서 false로 평가된다.
        answer.push(temp ? temp : -1);
    }
    return answer;
}