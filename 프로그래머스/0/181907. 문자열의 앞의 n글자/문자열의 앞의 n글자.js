function solution(my_string, n) {
    // slice 메서드를 사용하여 문자열의 앞부분을 추출
    // 0: 문자열의 시작 위치
    // n: 추출할 끝 위치(이 위치는 포함되지 않음)
    return my_string.slice(0, n);
}