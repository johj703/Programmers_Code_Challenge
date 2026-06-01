function solution(files) {
    return files.sort((a, b) => {
        // HEAD와 NUMBER 추출
        // ^([^0-9]+) → 숫자가 아닌 문자들 (HEAD)
        // ([0-9]{1,5}) → 1~5자리 숫자 (NUMBER)
        const [, headA, numA] = a.match(/^([^0-9]+)([0-9]{1,5})/);
        const [, headB, numB] = b.match(/^([^0-9]+)([0-9]{1,5})/);

        // 1. HEAD 비교 (대소문자 무시)
        const headCompare = headA
            .toLowerCase()
            .localeCompare(headB.toLowerCase());
        if (headCompare !== 0) return headCompare;

        // 2. NUMBER 비교 (숫자로 변환 -> 앞의 0 무시)
        return parseInt(numA) - parseInt(numB);

        // 3. HEAD, NUMBER 모두 같으면 원래 순서 유지
        // -> JavaScript에서 sort는 stable sort이므로 자동으로 처리!
    });
}