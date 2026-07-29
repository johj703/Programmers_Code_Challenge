function solution(A, B) {
    // ----- 두 배열을 오름차순으로 정렬 -----
    const sortedA = [...A].sort((a, b) => a - b);
    const sortedB = [...B].sort((a, b) => a - b);

    let winCount = 0;
    let aIndex = 0; // "현재 아직 안 이긴 A들 중 가장 작은 값"을 가리키는 포인터

    // ----- B를 작은 값부터 순회하며, 이길 수 있는 가장 작은 A를 찾아 매칭 -----
    for (let bIndex = 0; bIndex < sortedB.length; bIndex++) {
        if (aIndex >= sortedA.length) break; // 더 이상 이길 A가 없으면 종료

        if (sortedB[bIndex] > sortedA[aIndex]) {
            winCount++; // 승리! 이 A는 처리 완료
            aIndex++; // 다음(더 큰) A로 이동
        }
        // 이길 수 없으면 이 B는 그냥 버림(다음 B로 넘어감, aIndex는 그대로)
    }

    return winCount;
}