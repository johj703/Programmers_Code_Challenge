function solution(n) {
    // 3x 마을에서 사용하는 숫자를 저장할 변수
    let x3 = 0;
    // 1부터 n까지 반복(10진법에서 n번째 숫자를 찾기 위해)
    for(let i = 1; i <= n; i++){
        // 3x 마을 숫자를 하나씩 증가
        x3++;
        // 현재 숫자가 3을 포함하거나 3의 배수인 동안 계속 증가
        while(x3.toString().includes('3') || x3 % 3 === 0) {
            x3++;
        }
    }
    // n번째 3x 마을 숫자 반환
    return x3;
}