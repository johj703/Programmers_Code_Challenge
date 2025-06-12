function solution(my_string) {
    // 자연수들의 합을 저장할 변수
    let result = 0;
    // 문자열의 각 문자를 순회
    for(let i = 0; i < my_string.length; i++){
        // 연속된 숫자들을 저장할 문자열
        let thisNum = '';
        // 현재 문자가 숫자인 동안 계속 반복
        while(!Number.isNaN(Number(my_string[i]))){
            // 숫자 문자를 thisNum에 추가
            thisNum += my_string[i];
            // 다음 문자로 이동
            i++;
        }       
        /* thisNum을 숫자로 변환하여 결과에 더하기
        (+thisNum은 Number(thisNum)과 같음) */
        result += +thisNum;
    }
    return result;
}