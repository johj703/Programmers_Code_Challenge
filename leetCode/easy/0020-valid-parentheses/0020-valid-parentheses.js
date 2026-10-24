/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (const character of s) {
        // 닫힌 괄호인 경우 (맵의 키에 존재하는지 확인)
        if (bracketMap[character]) {
            // 스택이 비어있으면 미리 가짜 값으로 처리하거나 체크
            if (stack.length === 0 || stack.pop() !== bracketMap[character]) {
                return false;
            }
        } else {
            // 여는 괄호인 경우 스택에 추가
            stack.push(character);
        }
    }

    // 순회가 끝났을 때, 스택이 완전히 비어있어야 모든 괄호가 정상적으로 짝을 이룬 것
    return stack.length === 0;
};