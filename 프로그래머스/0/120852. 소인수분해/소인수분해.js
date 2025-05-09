function solution(n) {
    // 소인수를 저장할 배열을 초기화
    let result = [];
    // 가장 작은 소수인 2부터 시작
    let divisor = 2;
    // n이 1보다 큰 동안 반복
    while(n >= 2) {
        // 현재 divisor로 n이 나누어 떨어지면
        if(n % divisor === 0){
            // divisor는 n의 소인수이므로 결과 배열에 추가
            result.push(divisor)
            // n을 divisor로 나누기
            n = n / divisor;
        } else {
            // 나누어 떨어지지 않으면 다음 숫자를 검사
            divisor ++;
        }
    }
    // 중복된 소인수를 제거하고 반환
    // Set 객체는 중복을 허용하지 않는 특성을 이용
    return [...new Set(result)];
}