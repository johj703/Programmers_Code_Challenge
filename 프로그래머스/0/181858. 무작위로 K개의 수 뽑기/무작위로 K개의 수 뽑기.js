function solution(arr, k) {
    // 결과를 저장할 빈 배열을 초기화
    let answer = [];
    // 입력 배열의 모든 요소를 순회
    for(let i = 0; i < arr.length; i++) {
        // 현재 요소가 결과 배열에 없는 경우에만 추가
        if(!answer.includes(arr[i])) {
            answer.push(arr[i]);
        }
        // 결과 배열의 길이가 k에 도달하면 반복을 중단
        if(answer.length === k) {
            break;
        }
    }
    // 결과 배열의 길이가 k보다 작으면 나머지를 -1로 채움
    while (answer.length < k) {
        answer.push(-1);
    }
    return answer;
}