function solution(s) {
    // 숫자를 저장할 stack 배열을 초기화
    const stack = [];
    // 문자열을 공백으로 분리하여 각 요소를 처리
    s.split(' ').forEach((target) => {
        // 현재 요소가 'Z'인 경우
        if(target === 'Z') {
            // stack에서 마지막 숫자를 제거(직전에 더한 숫자를 취소)
            stack.pop();
        } else {
            // 'Z'가 아닌 경우, 숫자로 변환하여 stack에 추가
            // '+' 연산자는 문자열을 숫자로 변환
            stack.push(+target);
        }
    })
    // stack에 숫자가 있으면 모든 숫자의 합을 반환하고, 없으면 0을 반환
    return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}