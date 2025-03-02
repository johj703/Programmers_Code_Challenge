function solution(binomial) {
    // 공백을 기준으로 문자열을 분리하여 a, op, b로 구조분해할당
    const [a, op, b] = binomial.split(' ');
    // 문자열 a와 b를 숫자로 변환
    let Num1 = Number(a);
    let Num2 = Number(b);
    
    // 연산자에 따라 다른 계산을 수행
    let result;
    if(op === '+'){
        // 덧셈 연산
        result = Num1 + Num2;
    } else if(op === '-'){
        // 뺄셈 연산
        result = Num1 - Num2;
    } else if(op === '*'){
        // 곱셈 연산
        result = Num1 * Num2;
    }
    return result;
}