function solution(my_string) {
    // 결과 문자열을 저장할 변수를 초기화
    let answer = "";
    // 영어의 모음(a, e, i, o, u)을 배열로 정의
    const vowel = ["a", "e", "i", "o", "u"];
    // 문자열의 각 문자를 순회
    for(let i = 0; i < my_string.length; i++) {
        // 현재 문자가 모음 배열에 포함되어 있지 않은 경우에만
        // 결과 문자열에 추가
        if(!vowel.includes(my_string[i])) {
            answer += my_string[i];
        } 
    }
    // 모음이 제거된 문자열을 반환
    return answer;
}