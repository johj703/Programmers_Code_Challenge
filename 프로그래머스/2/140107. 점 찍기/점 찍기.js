function solution(k, d) {
    let total_count = 0;
    // x좌표 값만큼 반복 실행
    for(let x = 0; x <= d; x += k) {
        // 원점과의 거리 y의 좌표를 구함
        const max_y = parseInt(Math.sqrt(d ** 2 - x ** 2));
        // 해당 y값의 k배수 개수 + 1
        total_count += parseInt(max_y / k) + 1;
    }
    return total_count;
}