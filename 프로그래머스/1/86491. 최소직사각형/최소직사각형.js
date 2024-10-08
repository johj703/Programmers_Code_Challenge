function solution(sizes) {
    // 가로 길이와 세로 길이를 담을 배열 w, h
    let w = [];
    let h = [];
    
    // 이차원 배열의 큰 값과 작은 값을 구분해서 큰 값은 w, 작은 값은 h에 담기
    sizes.map((v, i) => {
        w[i] = Math.max(...v)
        h[i] = Math.min(...v)
    })
    // w와 h에서 서로 가장 큰 값을 곱하기
    return Math.max(...w)* Math.max(...h)
}