function solution(n) {
    // 이동 방향을 정의: 오른쪽, 아래, 왼쪽, 위 순서
    // [행 이동, 열 이동] 형태로 표현
    const move = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    // nxn 크기의 2차원 배열을 생성하고 0으로 초기화
    const answer = Array.from(Array(n), () => Array(n).fill(0));
    
    // 현재 위치(x, y), 현재 방향(dir), 채울 숫자(num)를 초기화
    let x = 0, y = 0, dir = 0, num = 1;
    
    // 1부터 n제곱까지 숫자를 배열에 채우기
    while(num <= n**2) {
        // 현재 위치에 현재 숫자를 채우기
        answer[x][y] = num;
        // 다음 위치를 계산
        let nextX = x + move[dir][0];
        let nextY = y + move[dir][1];
        
        // 다음 위치가 배열 범위를 벗어나거나, 이미 숫자가 채워져 있는 경우
        if(nextX >= n || nextX < 0 || nextY >= n || nextY < 0 || answer[nextX][nextY] !== 0) {
            // 방향을 시계방향으로 90도 회전(0 -> 1 -> 2 -> 3 -> 0)
            dir = (dir + 1) % 4;
            // 새로운 방향으로 다음 위치를 다시 계산
            nextX = x + move[dir][0];
            nextY = y + move[dir][1];
        }
        // 현재 위치를 다음 위치로 업데이트
        x = nextX;
        y = nextY;
        // 숫자를 1 증가
        num++
    }
    return answer;
}