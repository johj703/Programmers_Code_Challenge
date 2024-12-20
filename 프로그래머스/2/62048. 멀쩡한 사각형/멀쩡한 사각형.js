// 유클리드 호제법을 이용한 최대 공약수 구하기
// 처음 w, h를 받기
function gcd(w, h) {
    // w과 h의 나머지 구하기
    const mod = w % h;
    
    // 만약 나머지가 0일 경우 h를 반환
    if(mod === 0) {
        return h;
    }
    
    // 만약 0이 아닐 경우 w에 h를 넣고 h에 나머지인 mod를 넣어서 해당 함수를 다시 호출
    return gcd(h, mod);
}

function solution(w, h) {
    // 최대 공약수 구하기
    const gcdVal = gcd(w, h);
    
    // 공식에 맞춰서 사용하기
    return w * h - (w + h - gcdVal);
}

console.log(solution(8, 12))