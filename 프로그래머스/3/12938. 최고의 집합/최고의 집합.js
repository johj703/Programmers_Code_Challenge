function solution(n, s) {
    // ----- 자연수 n개로는 합이 최소 n(모두 1일 때) 이상이어야 함 -----
    if (s < n) return [-1];

    // ----- s를 n으로 균등하게 나눈 몫과 나머지 계산 -----
    const quotient = Math.floor(s / n);
    const remainder = s % n;

    // ----- (n - remainder)개는 quotient, remainder개는 (quotient + 1) -----
    // "오름차순"이므로 quotient들을 먼저 채우고, 그 뒤에 (quotient + 1)들을 채움
    const answer = [];

    for (let i = 0; i < n - remainder; i++) {
        answer.push(quotient);
    }
    for (let i = 0; i < remainder; i++) {
        answer.push(quotient + 1);
    }

    return answer;
}