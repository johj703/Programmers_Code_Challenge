function solution(n) {
    // 각 자리 숫자의 합을 저장할 변수를 0으로 초기화
    // let을 사용하여 블록 스코프를 갖도록 함.
    let answer = 0;
    // 숫자 n을 문자열로 변환
    n = n.toString();
    // for ...of 루프를 사용하여 문자열의 각 문자(자리 숫자)를 순회
    for(let i of n){
        // 현재 문자(자리 숫자)를 숫자로 변환하여 answer에 더하기
        answer += Number(i);
    }
    return answer;
}