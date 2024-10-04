function solution(numer1, denom1, numer2, denom2) {
    // 분자
    const numer = numer1 * denom2 + numer2 * denom1;
    // 분모
    const denom = denom1 * denom2;
    const getGcd = (a, b) => (a % b == 0 ? b : getGcd(b, a % b));
    // 최대 공약수
    const gcd = getGcd(numer, denom);
    // 약분해서 리턴
    return [numer / gcd, denom / gcd];
}