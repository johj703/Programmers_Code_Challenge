function solution(n, l, r) {
    // [1, pos]까지 1의 개수 계산
    const countOnes = (n, pos) => {
        if (pos <= 0) return 0;
        if (n === 0) return 1; // 0번째는 "1" 한 글자

        const blockSize = Math.pow(5, n - 1);
        const pattern = [1, 1, 0, 1, 1]; // 블록 패턴 ("11011")

        let result = 0;
        for (let i = 0; i < 5; i++) {
            if (pos <= 0) break;
            const take = Math.min(pos, blockSize);
            if (pattern[i] === 1) {
                result += countOnes(n - 1, take);
            }
            pos -= blockSize;
        }
        return result;
    };

    // [l, r] 구간의 1의 개수 = [1, r]의 1의 개수 - [1, l-1]의 1의 개수
    return countOnes(n, r) - countOnes(n, l - 1);
}