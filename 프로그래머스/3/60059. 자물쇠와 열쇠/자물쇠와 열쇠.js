function solution(key, lock) {
    const n = lock.length;
    const m = key.length;
    const size = n + 2 * m; // 확장 격자 크기

    // ----- 90도 회전 함수 -----
    const rotate90 = (matrix) => {
        const len = matrix.length;
        const rotate = Array.from({ length: len }, () =>
            new Array(len).fill(0),
        );
        for (let r = 0; r < len; r++) {
            for (let c = 0; c < len; c++) {
                rotate[c][len - 1 - r] = matrix[r][c];
            }
        }
        return rotate;
    };

    // ----- 자물쇠가 열렸는지 확인하는 함수(원래 자물쇠 영역이 모두 1인지) -----
    const isUnlocked = (board) => {
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                // "확장 격자 안에서 원래 자물쇠가 있던 위치"는 (m행/열만큼 offset)
                if (board[r + m][c + m] !== 1) return false;
            }
        }
        return true;
    };

    let currentKey = key;

    // ----- 4가지 회전 상태를 모두 시도 -----
    for (let rotation = 0; rotation < 4; rotation++) {
        // ----- 확장 격자의 모든 가능한 이동 위치(x, y)를 시도 -----
        for (let x = 0; x < size - m + 1; x++) {
            for (let y = 0; y < size - m + 1; y++) {
                // ----- 확장 격자 생성 후, 자물쇠 배치(중앙 m-m+n-1 위치) -----
                const board = Array.from({ length: size }, () =>
                    new Array(size).fill(0),
                );
                for (let r = 0; r < n; r++) {
                    for (let c = 0; c < n; c++) {
                        board[r + m][c + m] = lock[r][c];
                    }
                }

                // ----- 열쇠를 (x, y) 위치에 "더해서" 얹기 -----
                for (let r = 0; r < m; r++) {
                    for (let c = 0; c < m; c++) {
                        board[x + r][y + c] += currentKey[r][c];
                    }
                }

                // ----- 자물쇠 영역이 모두 정확히 1인지 확인-----
                if (isUnlocked(board)) return true;
            }
        }

        // ----- 다음 회전 상태로 -----
        currentKey = rotate90(currentKey);
    }
    return false;
}