function solution(n, build_frame) {
    const structures = new Set(); // "x, y, a" 형태로 기둥(a=0)/보(a=1) 저장

    // 기둥(x,y) 하나가 유효한지 검사
    function isColumnValid(x, y) {
        if (y === 0) return true; // 바닥 위
        if (structures.has(`${x},${y - 1},0`)) return true; // 아래에 기둥
        if (structures.has(`${x - 1},${y},1`)) return true; // 왼쪽 끝이 보 위
        if (structures.has(`${x},${y},1`)) return true; // 오른쪽 끝이 보 위
        return false;
    }

    // 보(x, y) 하나가 유효한지 검사
    function isBeamValid(x, y) {
        if (structures.has(`${x},${y - 1},0`)) return true; // 왼쪽 끝 아래 기둥
        if (structures.has(`${x + 1},${y - 1},0`)) return true; // 오른쪽 끝 아래 기둥
        if (
            structures.has(`${x - 1},${y},1`) &&
            structures.has(`${x + 1},${y},1`)
        )
            return true; // 양쪽 다른 보와 연결
        return false;
    }

    // 현재 Set에 있는 모든 구조물이 유효한지 전체 검사
    function isValid() {
        for (const key of structures) {
            const [xStr, yStr, aStr] = key.split(',');
            const x = Number(xStr),
                y = Number(yStr),
                a = Number(aStr);
            if (a === 0 && !isColumnValid(x, y)) return false;
            if (a === 1 && !isBeamValid(x, y)) return false;
        }
        return true;
    }

    for (const [x, y, a, b] of build_frame) {
        const key = `${x},${y},${a}`;

        if (b === 1) {
            // 설치: 일단 넣고 검사, 무효하면 되돌리기(제거)
            structures.add(key);
            if (!isValid()) {
                structures.delete(key);
            }
        } else {
            // 삭제: 일단 지우고 검사, 문제 생기면 롤백
            structures.delete(key);
            if (!isValid()) {
                structures.add(key); // 원상복구
            }
        }
    }

    // 결과를 [x, y, a] 형태로 변환 후 정렬
    const result = [...structures].map((key) => key.split(',').map(Number));
    result.sort((p, q) => p[0] - q[0] || p[1] - q[1] || p[2] - q[2]);

    return result;
}