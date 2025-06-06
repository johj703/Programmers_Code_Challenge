function solution(array, n) {
    // n의 개수를 세기 위한 카운터 변수
    let answer = 0;
    
    // 배열의 모든 요소를 순회
    for(i = 0; i < array.length; i++) {
        // 현재 요소가 찾는 숫자 n과 같은지 확인
        if(array[i] === n){
            // 같으면 카운터 증가
            answer++
        }
    }
    // 총 개수 반환
    return answer;
}