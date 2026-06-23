function solution(s) {
    const n = s.length;
    let minLength = n; // 압축 안 한 원본 길이로 초기화

    // 1부터 n/2까지 각 단위로 시도
    for (let size = 1; size <= Math.floor(n / 2); size++) {
        let compressed = '';
        let prev = s.slice(0, size); // 첫 번째 단위
        let count = 1;

        for (let i = size; i < n; i += size) {
            const cur = s.slice(i, i + size);

            if (cur === prev) {
                count++; // 같으면 카운트 증가
            } else {
                // 다르면 이전까지 결과를 압축 문자열에 추가
                compressed += (count > 1 ? count : '') + prev;
                prev = cur;
                count = 1;
            }
        }
        // 마지막 그룹 처리
        compressed += (count > 1 ? count : '') + prev;

        minLength = Math.min(minLength, compressed.length);
    }

    return minLength;
}