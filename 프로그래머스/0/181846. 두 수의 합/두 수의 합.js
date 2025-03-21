function solution(a, b) {
    // BigInt를 사용해서 두 문자열을 큰 정수로 변환하고 더하기
    // BigInt는 Javascript에서 큰 정수를 다룰 수 있는 내장 객체다.
    let toNum = BigInt(a) + BigInt(b);
    
    // 계산 결과를 다시 문자열로 변환하여 반환
    return toNum.toString();
}