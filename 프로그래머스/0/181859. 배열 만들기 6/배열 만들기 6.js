function solution(arr) {
    // 스택으로 사용할 빈 배열을 초기화
    let stk = [];
    // 입력 배열의 모든 요소를 순회
    for(let i = 0; i < arr.length; i++) {
        // 스택이 비어있는 경우
        //('stk === 0'이 아니라 'stk.length === 0'이 맞는 조건)
        if(stk === 0) {
            // 현재 요소를 스택에 추가
            stk.push(arr[i]);
        // 스택의 마지막 요소와 현재 요소가 같은 경우
        } else if(stk[stk.length - 1] === arr[i]) {
            // 스택에서 마지막 요소를 제거(pop)
            stk.pop();
        // 스택의 마지막 요소와 현재 요소가 다른 경우
        } else if(stk[stk.length - 1] !== arr[i]) {
            // 현재 요소를 스택에 추가
            stk.push(arr[i]);
        }
    }
    // 최종 스택이 비어있으면 [-1]을 반환하고, 그렇지 않으면 스택을 반환
    return stk.length === 0 ? [-1] : stk;
}