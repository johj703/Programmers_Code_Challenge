function solution(cipher, code) {
    // 해독된 문자열을 저장할 변수를 초기화
    var answer = '';
    // 문자열의 각 문자를 순회
    for(let i = 0; i < cipher.length; i++){
        // i는 0부터 시작하므로, i % code === code - 1 조건은
        // (i + 1)이 code의 배수일 때 true가 된다.
        // 예: code가 3일 때, i = 2, 5, 8, ...(index)에서 true
        // (index + 1 = 3, 6, 9, ... 은 3의 배수)
        if(i % code === code - 1){
            // at()메서드는 지정된 index의 문자를 반환
            // 해당 위치의 문자를 정답 문자열에 추가
            answer += cipher.at(i)
        }
    }
    return answer;
}