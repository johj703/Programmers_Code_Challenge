function solution(my_string) {
    // 수식 문자열을 공백을 기준으로 분리하여 배열로 만들기
    // 예: "3 + 5" -> ["3", "+", "5"]
    const splited = my_string.split(" ");
    
    // 첫 번째 숫자를 결과값의 초기값으로 설정
    let ans = Number(splited[0]);
    
    // 분리된 배열의 각 요소를 순회
    splited.forEach((item, index) => {
        // 현재 요소가 덧셈 연산자인 경우
        if(item === "+"){
            // 다음 위치의 숫자를 현재 결과값에 더하기
            ans += Number(splited[index + 1]);
        }
        // 현재 요소가 뺄셈 연산자인 경우
        if(item === "-"){
            // 다음 위치의 숫자를 현재 결과값에서 빼기
            ans -= Number(splited[index + 1]);
        }
    })
    // 최종 계산 결과를 반환
    return ans;
}