function solution(my_string) {
    // 합계를 저장할 변수를 0으로 초기화
    let sum = 0;
    // 문자열의 각 문자를 순회
    for(let i = 0; i < my_string.length; i++){
        // 현재 문자가 숫자인지 확인
        // isNaN()은 값이 NaN(Not a Number)인지 확인하는 함수
        // !isNaN(문자)는 해당 문자가 숫자로 변환 가능한지를 확인
        if(!isNaN(my_string[i])) {
            // 숫자인 경우, 문자열을 숫자로 변환하여 sum에 더하기
            sum += Number(my_string[i]);
        }
    }
    // 모든 자연수의 합을 반환
    return sum;
}