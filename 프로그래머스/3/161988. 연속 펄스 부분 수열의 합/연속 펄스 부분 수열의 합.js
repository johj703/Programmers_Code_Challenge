function solution(sequence) {
    const n = sequence.length;

    // ----- 짝수/홀수 index에 따라 부호를 뒤집은 값을 즉석에서 계산하며 카데인 진행 -----
    let maxEndingHere = sequence[0]; // "현재 위치에서 끝나는 최대 부분합"
    let minEndingHere = sequence[0]; // "현재 위치에서 끝나는 최소 부분합"
    let maxSum = sequence[0];
    let minSum = sequence[0];

    for (let i = 1; i < n; i++) {
        // "i가 짝수면 그대로, 홀수면 부호 반전"
        const value = i % 2 === 0 ? sequence[i] : -sequence[i];

        // ----- 카데인: "이전까지의 부분합에 이어붙일지, 여기서 새로 시작할지"를 선택 -----
        maxEndingHere = Math.max(value, maxEndingHere + value);
        minEndingHere = Math.min(value, minEndingHere + value);

        maxSum = Math.max(maxSum, maxEndingHere);
        minSum = Math.min(minSum, minEndingHere);
    }

    // ----- 절대값이 최대인 경우 = max(최대 부분합, -최소 부분합) -----
    return Math.max(maxSum, -minSum);
}