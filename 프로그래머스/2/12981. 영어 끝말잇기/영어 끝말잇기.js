function solution(n, words) {
    const used = new Set(); // 사용한 단어 저장

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const prevWord = i > 0 ? words[i - 1] : null;

        // 규칙 위반 체크
        // 1. 끝말 잇기 실패: 이전 단어의 마지막 글자 != 현재 단어의 첫 글자
        if (prevWord && prevWord[prevWord.length - 1] !== word[0]) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }

        // 2. 중복 단어: 이미 사용한 단어
        if (used.has(word)) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }

        // 사용한 단어 추기
        used.add(word);
    }

    // 탈락자 없음
    return [0, 0];
}