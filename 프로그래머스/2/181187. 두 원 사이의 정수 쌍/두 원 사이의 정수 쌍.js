function solution(r1, r2) {
    let count = 0;

    for (let x = 1; x <= r2; x++) {
        // 안쪽 원 밖의 최소 y (x < r1일 때만 안쪽 원 영향 받음)
        const minY = x < r1 ? Math.ceil(Math.sqrt(r1 * r1 - x * x)) : 0;

        // 바깥 원 안의 최대 y
        const maxY = Math.floor(Math.sqrt(r2 * r2 - x * x));

        // 해당 x열에서 만족하는 y의 개수
        count += maxY - minY + 1;
    }

    // 4분면 대칭으로 4배
    return count * 4;
}