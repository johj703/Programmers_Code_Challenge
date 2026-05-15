function solution(s) {
    // 문자열 길이가 홀수면 짝이 안 맞으므로 불가능
    if (s.length % 2 === 1) return 0;

    const stack = [];

    for (const char of s) {
        // 스택의 top과 현재 문자가 같으면 짝 제거 (pop)
        if (stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            // 다르면 스택에 추가
            stack.push(char);
        }
    }

    // 스택이 비어있으면 모두 제거 성공
    return stack.length === 0 ? 1 : 0;
}