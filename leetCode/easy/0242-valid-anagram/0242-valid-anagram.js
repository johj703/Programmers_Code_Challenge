/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // 1. 길이가 다르면 바로 false
    if (s.length !== t.length) {
        return false;
    }

    const charMap = new Map();

    // 2. s의 글자 수 카운트
    for (let char of s) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    // 3. t의 글자 수 차감 및 비교
    for (let char of t) {
        if (!charMap.has(char) || charMap.get(char) === 0) {
            return false;
        }
        charMap.set(char, charMap.get(char) - 1);
    }
    return true;
};