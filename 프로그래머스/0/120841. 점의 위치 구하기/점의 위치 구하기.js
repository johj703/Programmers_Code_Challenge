function solution(dot) {
    // x좌표는 dot[0], y좌표는 dot[1]에 저장되어 있음.
    // 1사분면: x좌표와 y좌표 모두 양수
    if(dot[0] > 0 && dot[1] > 0) {
        return 1;
    // 2사분면: x좌표는 음수, y좌표는 양수
    } else if(dot[0] < 0 && dot[1] > 0) {
        return 2;
    // 3사분면: x좌표와 y좌표 모두 음수
    } else if(dot[0] < 0 && dot[1] < 0) {
        return 3;
    // 4사분면: x좌표는 양수, y좌표는 음수
    } else {
        return 4;
    }
}