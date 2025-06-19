function solution(lines) {
    // -100부터 99까지의 좌표를 표현할 수 있는 배열(index 0~199)
    // 각 위치에서 겹치는 선분의 개수를 저장
    let line = new Array(200).fill(0);
    
    // 각 선분에 대해 처리
    lines.forEach(([a, b]) => {
        // 선분의 시작점부터 끝점 직전까지 반복(선분은 구간이므로 끝점 제외)
        for(; a < b; a++) 
            // 좌표 a를 배열 index로 변환 (a + 100)하여 해당 위치의 카운트 증가
            line[a + 100]++;
    });
    
    // 배열을 순회하여 값이 1보다 큰(2개 이상 겹치는) 구간의 개수를 누적해서 반환
    return line.reduce((a, c) => c > 1 ? a + 1 : a, 0);
}