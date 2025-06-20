function solution(a, b) {
    // a, b의 최대공약수 구하는 함수(유클리드 호제법)
    const getGcd = (a, b) => (a % b == 0 ? b : getGcd(b, a % b));
    
    // 분모(b)를 최대공약수로 나누어 기약분수의 분모로 만들어 줌
    let denom = b / getGcd(a, b);
    
    // 분모(denom)의 소인수 배열
    let primeFactor = [];
    
    // 2부터 분모까지 모든 수로 나누어 소인수 찾기
    for(let i = 2; i <= denom; i++){
        // i로 나누어 떨어지는 동안 계속 나누면서 소인수 추가
        while(denom % i === 0){
            denom /= i;
            primeFactor.push(i);
        }
    }
    
    // 중복 제거 후 2와 5가 아닌 소인수가 있으면 무한소수(2), 없으면 유한소수(1)
    return [...new Set(primeFactor)].filter((v) => !(v == 2 || v == 5)).length ? 2 : 1;
}