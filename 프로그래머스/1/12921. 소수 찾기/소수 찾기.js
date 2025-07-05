function solution(n) {
    // n이 2보다 작으면 소수가 없음
    if(n < 2) return 0;
    
    // 에라토스테네스의 체: 모든 수를 처음에는 소수로 가정(true)
    // index 0, 1은 사용하지 않음(0, 1은 소수가 아니다.)
    let isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아니다.
    
    // 2부터 √n까지만 확인하면 됨 (핵심 최적화)
    for(let i = 2; i * i <= n; i++){
        // i가 소수라면 i의 배수들을 모두 소수가 아니라고 표시
        if(isPrime[i]){
            //i²부터 시작 (i*2, i*3, ... i*(i-1)은 이미 처리됨)
            for(let j = i * i; j <= n; j += i){
                isPrime[j] = false; // i의 배수는 소수가 아니다.
            }
        }
    }
    // true인 개수를 세어서 소수의 개수 반환
    return isPrime.filter(prime => prime).length;
}