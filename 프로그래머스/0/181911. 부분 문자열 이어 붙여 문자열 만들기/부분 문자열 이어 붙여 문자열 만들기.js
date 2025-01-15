function solution(my_strings, parts) {
    // 최종 결과를 저장할 빈 문자열 초기화
    var result = "";
    // my_strings 배열의 모든 요소를 순회
    for(let i = 0; i < my_strings.length; i++) {
        // parts 배열에서 현재 문자열의 [시작, 끝] index를 구조분해할당
        const [a, b] = parts[i];
        // 현재 문자열(my_strings[i])에서 a부터 b까지의 부분을 잘라서 결과에 추가
        // slice(a, b + 1)에서 b + 1을 하는 이유는 slice가 끝 index를 포함하지 않기 때문에
        result += my_strings[i].slice(a, b + 1);
    }
    return result;
}