function solution(my_string, m, c) {
    // 2차원 배열 생성
    // 문자열을 m개씩 나누어 2차원 배열 생성
    const grid = [];
    for(let i = 0; i < my_string.length; i += m) {
        // i부터 i+m까지의 문자열을 잘라서 문자 배열로 변환하고 grid에 추가
        grid.push(my_string.slice(i, i + m).split(""));
    }
    // 각 행에서 c번째 문자를 추출하여 하나의 문자열로 연결
    const result = grid.map((row) => row[c - 1]).join("");
    return result;
}