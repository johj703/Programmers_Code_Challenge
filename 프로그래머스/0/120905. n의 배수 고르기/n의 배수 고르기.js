function solution(n, numlist) {
    // n의 배수들을 저장할 빈 배열들을 초기화
    let answer = [];
    
    // numlist 배열의 모든 요소를 순회
    for(let i = 0; i < numlist.length; i++){
        // 현재 요소가 n의 배수인지 확인
        // numlist[i] % n === 0이면 numlist[i]는 n의 배수
        if(numlist[i] % n === 0){
            // n의 배수인 경우 answer 배열에 추가
            answer.push(numlist[i]);
        }
    }
    // n의 배수만 포함된 배열을 반환
    return answer;
}