/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    // 1. 단축 조건 (최적화)
    if (ransomNote.length > magazine.length) {
        return false;
    }

    const characterMap = new Map();

    // 2. magazine 글자 세기 (n번 순회)
    for (const character of magazine) {
        characterMap.set(character, (characterMap.get(character) || 0) + 1);
    }

    // 3. ransomNote 글자 차감하기 (m번 순회)
    for (const character of ransomNote) {
        if (!characterMap.get(character)) {
            return false;
        }
        characterMap.set(character, characterMap.get(character) - 1);
    }
    return true;
};
