function solution(keyinput, board) {
    // 캐릭터의 시작 위치 [0, 0]
    const result = [0, 0];
    // X축 최대 이동 범위(보드 가로 크기에서 중앙 기준)
    const maxX = (board[0] - 1) / 2;
    // Y축 최대 이동 범위(보드 세로 크기에서 중앙 기준)
    const maxY = (board[1] - 1) / 2;
    
    // 모든 키 입력을 순서대로 처리
    for(let i = 0; i < keyinput.length; i++){
        // 오른쪽 이동: x좌표가 최대값보다 작을 때만 이동
        if(keyinput[i] === "right" && result[0] < maxX) {
            result[0] += 1;
        // 왼쪽 이동: x좌표가 최소값보다 클 때만 이동
        } else if(keyinput[i] === "left" && result[0] > -maxX) {
            result[0] -= 1;
        // 위쪽 이동: y좌표가 최대값보다 작을 때만 이동
        } else if(keyinput[i] === "up" && result[1] < maxY) {
            result[1] += 1;
        // 아래쪽 이동: y좌표가 최소값보다 클 때만 이동
        } else if(keyinput[i] === "down" && result[1] > -maxY) {
            result[1] -= 1;
        }
    }
    return result;
}