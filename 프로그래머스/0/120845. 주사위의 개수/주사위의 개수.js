function solution(box, n) {
    // 배열 구조 분해 할당을 사용해서 box 배열의 각 요소를 변수에 할당.
    // width: 상자의 가로, length: 상자의 세로, height: 상자의 높이
    let [width, length, height] = box;
    // 각 차원(가로, 세로, 높이)에 들어갈 수 있는 주사위의 개수를 계산.
    // Math.floor()를 사용해서 각 차원에 온전히 들어갈 수 있는 주사위의 개수를 구하기.
    // 예: 가로 길이가 7이고 주사위 길이가 2라면, 가로로는 3개의 주사위만 들어갈 수 있음.
    // 그리고 각 차원의 개수를 곱하여 총 개수를 구하기.
    return Math.floor(width/n) * Math.floor(length/n) * Math.floor(height/n);
}