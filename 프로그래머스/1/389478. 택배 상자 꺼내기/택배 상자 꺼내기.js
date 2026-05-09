function solution(n, w, num) {
    // num 상자가 어느 층, 어느 위치에 있는지 계산
    const floor = Math.floor((num - 1) / w); // 층 번호 (0 - indexed)
    const offsetInLayer = (num - 1) % w; // 층 내 offset

    // 현재 상자의 열 위치 계산
    let column;
    if (floor % 2 === 0) {
        // 짝수 층 (0, 2, 4...): 왼쪽 -> 오른쪽
        column = offsetInLayer;
    } else {
        // 홀수 층 (1, 3, 5...): 오른쪽 -> 왼쪽
        column = w - 1 - offsetInLayer;
    }

    // 꺼내야 하는 상자 개수 (자신 포함)
    let count = 1;

    // 총 층 수
    const totalFloors = Math.ceil(n / w);

    // 위층들을 확인하며 같은 열에 있는 상자 카운트
    for (let f = floor + 1; f < totalFloors; f++) {
        const layerStart = f * w + 1;
        const layerEnd = Math.min((f + 1) * w, n);
        const layerCount = layerEnd - layerStart + 1; // 이 층의 상자 개수

        if (f % 2 === 0) {
            // 짝수 층: 왼쪽부터 채워짐
            if (column < layerCount) {
                count++;
            }
        } else {
            // 홀수 층: 오른쪽부터 채워짐
            // column이 채워진 범위에 있는지 확인
            if (column >= w - layerCount) {
                count++;
            }
        }
    }

    return count;
}