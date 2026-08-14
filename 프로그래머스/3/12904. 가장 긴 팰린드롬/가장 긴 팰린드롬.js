function solution(s) {
    const n = s.length;
    let maxLength = 1; // 문자열 길이가 1 이상이므로 최소 1은 항상 보장됨

    // ----- 중심(center)을 기준으로 좌우로 확장하며 팰린드롬 길이를 구하는 함수 -----
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < n && s[left] === s[right]) {
            left--;
            right++;
        }
        // 반복문이 끝난 시점은 "한 칸 더 나간 상태"으미로 실제 길이는 (right-left-1)
        return right - left - 1;
    };

    for (let i = 0; i < n; i++) {
        // ----- 홀수 길이 팰린드롬(중심이 글자 하나) -----
        const oddLength = expandAroundCenter(i, i);
        maxLength = Math.max(maxLength, oddLength);

        // ----- 짝수 길이 팰린드롬(중심이 글자와 글자 사이) -----
        const evenLength = expandAroundCenter(i, i + 1);
        maxLength = Math.max(maxLength, evenLength);
    }

    return maxLength;
}