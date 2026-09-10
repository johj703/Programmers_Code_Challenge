function solution(beginning, target) {
    const rows = beginning.length;
    const cols = beginning[0].length;

    let answer = Infinity;

    // 행 뒤집기 여부를 비트마스크로 표현 (bit가 1이면 그 행을 뒤집음)
    for (let mask = 0; mask < 1 << rows; mask++) {
        const rowFlipped = [];
        let rowFlipCount = 0;
        for (let i = 0; i < rows; i++) {
            const flip = (mask >> i) & 1;
            rowFlipped.push(flip);
            rowFlipCount += flip;
        }

        // 각 열의 뒤집기 여부를 첫 번째 행(0행) 기준으로 결정
        const colFlip = new Array(cols).fill(0);
        for (let j = 0; j < cols; j++) {
            const afterRowFlip = beginning[0][j] ^ rowFlipped[0];
            colFlip[j] = afterRowFlip !== target[0][j] ? 1 : 0;
        }

        // 결정된 행/열 뒤집기 규칙이 모든 셀에서 실제로 target과 일치하는지 검증
        let valid = true;
        for (let i = 0; i < rows && valid; i++) {
            for (let j = 0; j < cols; j++) {
                const value = beginning[i][j] ^ rowFlipped[i] ^ colFlip[j];
                if (value !== target[i][j]) {
                    valid = false;
                    break;
                }
            }
        }

        if (valid) {
            const colFlipCount = colFlip.reduce((sum, v) => sum + v, 0);
            answer = Math.min(answer, rowFlipCount + colFlipCount);
        }
    }

    return answer === Infinity ? -1 : answer;
}