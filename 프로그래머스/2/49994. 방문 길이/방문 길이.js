function solution(dirs) {
    let x = 0,
        y = 0; // 시작 위치 (0, 0)
    const visited = new Set(); // 방문한 길 저장

    // 방향별 이동량
    const moves = {
        'U': [0, 1], // 위로 이동
        'D': [0, -1], // 아래로 이동
        'R': [1, 0], // 오른쪽으로 이동
        'L': [-1, 0], // 왼쪽으로 이동
    };

    for (const dir of dirs) {
        const [dx, dy] = moves[dir];
        const nx = x + dx;
        const ny = y + dy;

        // 경계 체크 (-5, 5)
        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) {
            continue; // 경계 넘으면 무시
        }

        // 길을 문자열로 표현 (양방향 고려)
        // A -> B와 B -> A는 같은 길!
        const from = `${x}, ${y}`;
        const to = `${nx}, ${ny}`;
        // 사전순으로 정렬하여 저장 (양방향 통일)
        const path = from < to ? `${from}-${to}` : `${to}-${from}`;

        visited.add(path); // Set에 추가(자동 중복 제거)

        // 이동
        x = nx;
        y = ny;
    }
    return visited.size; // 처음 걸어본 길의 개수
}