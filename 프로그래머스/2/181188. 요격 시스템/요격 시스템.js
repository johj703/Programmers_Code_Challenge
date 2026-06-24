function solution(targets) {
    // 끝점(e) 기준 오름차순 정렬
    const sorted = [...targets].sort((a, b) => a[1] - b[1]);

    let count = 0;
    let lastShot = -Infinity; // 마지막 요격 미사일 발사 위치

    for (const [s, e] of sorted) {
        // lastShot이 (s, e) 구간 밖이면 -> 새로 발사!
        if (lastShot <= s || lastShot >= e) {
            lastShot = e - 0.5; // 개구간이라 e보다 살짝 작게 발사
            count++;
        }
    }

    return count;
}