/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // 1. 소문자로 먼저 변환하여 대문자 처리(A-Z)를 제거
    const lowerStr = s.toLowerCase();

    // 2. 영문자(a-z)와 숫자(0-9)만 필터링해서 배열로 모으기
    const filteredChars = [];
    for (const character of lowerStr) {
        if (/[a-z0-9]/.test(character)) {
            filteredChars.push(character);
        }
    }

    // 3. 정제된 글자들을 문자열로 합치기
    const cleaned = filteredChars.join('');

    // 4. 뒤집은 문자열과 비교(배열은 '===' 비교가 안 되므로 문자열로 변환 후 비교)
    const reversed = filteredChars.slice().reverse().join('');

    return cleaned === reversed;
};
