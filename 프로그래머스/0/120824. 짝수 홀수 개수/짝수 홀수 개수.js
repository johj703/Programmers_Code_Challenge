function solution(num_list) {
    // 결과를 담을 배열을 초기화
    let answer = [];
    // 짝수인 요소의 index를 저장할 배열을 초기화
    let even = [];
    
    // 배열을 모든 요소를 순회
    for(let i = 0; i < num_list.length; i++){
        // 현재 요소가 짝수인지 확인(2로 나눴을 때 나머지가 0)
        if(num_list[i] % 2 === 0){
            // 짝수인 요소의 index를 even 배열에 추가
            even.push(i);
        }
    }
    // 결과 배열을 구성
    // - 첫 번째 요소: 짝수의 개수(even 배열의 길이)
    // - 두 번째 요소: 홀수의 개수(전체 길이 - 짝수 개수)
    answer = [even.length, num_list.length - even.length];
    return answer;
}