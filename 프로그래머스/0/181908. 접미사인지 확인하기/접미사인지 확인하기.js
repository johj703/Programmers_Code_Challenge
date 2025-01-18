function solution(my_string, is_suffix) {
    // endsWith 메서드로 문자열 끝부분 확인
    // my_string: 검사할 전체 문자열
    // is_suffix: 끝부분에 있는지 확인할 문자열
    // endsWith()는 true/false를 반환
    // endsWith 메서드를 사용해서 문자열이 is_suffix로 끝나는지 확인
    // 삼항 연산자를 사용해서 true면 1을, false면 0을 반환
    return my_string.endsWith(is_suffix) ? 1 : 0;
}