function solution(arr) {
    // 결과를 저장할 빈 배열 초기화
    let answer = [];
    // 입력 배열의 모든 요소를 순회
    for(let i = 0; i < arr.length; i++){
        // 현재 요소(arr[i])의 값만큼 반복
        for(let j = 0; j < arr[i]; j++) {
            // 현재 요소를 결과 배열에 추가
            answer.push(arr[i]);
        }
    }
    return answer;
}