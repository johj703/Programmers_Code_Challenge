function solution(my_string, num1, num2) {
    // 문자열을 배열로 변환
    // 문자열은 불변(immutable)이므로 직접 수정할 수 없어 배열로 변환
    let ans = [...my_string];
    // num1 위치의 문자를 num2 위치의 문자로 교체
    // splice(시작 index, 제거할 요소 수, 추가할 요소)
    ans.splice(num1, 1, my_string[num2]);
    
    // num2 위치의 문자를 num1 위치의 문자로 교체
    ans.splice(num2, 1, my_string[num1]);
    
    // 배열을 다시 문자열로 변환하여 반환
    return ans.join('');
}