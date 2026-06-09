function solution(n) {
    const digits = ['4', '1', '2']; // 나머지 0, 1, 2에 대응
    let result = '';

    while (n > 0) {
        const remainder = n % 3;
        result = digits[remainder] + result; // 앞에 붙이기
        n = Math.floor(n / 3);

        // 나머지가 0이면 4를 사용했으므로 몫에서 1 빼기
        if (remainder === 0) n--;
    }

    return result;
}