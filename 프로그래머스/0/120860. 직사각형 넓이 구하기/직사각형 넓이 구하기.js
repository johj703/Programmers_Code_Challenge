function solution(dots) {
    // x좌표를 기준으로 점들을 오름차순 정렬
    dots.sort((a, b) => a[0] - b[0]);
    
    // 정렬 후 첫 번째와 두 번째의 점의 y좌표 차이 = 세로 길이
    const oneSide = Math.abs(dots[0][1] - dots[1][1]);
    // 정렬 후 첫 번째와 세 번째의 점의 x좌표 차이 = 가로 길이
    const otherSide = Math.abs(dots[0][0] - dots[2][0]);
    
    // 가로 x 세로 = 직사각형의 넓이
    return oneSide * otherSide;
}