function solution(my_string, s, e) {
    // 1. 지정된 구간(s부터 e까지)의 문자열을 추출하고 뒤집기
    const reverseStr = my_string
    .slice(s, e+1)  // s부터 e까지 문자열 추출
    .split("")  // 문자열을 배열로 반환
    .reverse()  // 배열의 순서를 뒤집기
    .join("");  // 다시 문자열로 변환
    
    // 2. 원본 문자열의 세 부분을 연결
    return my_string.slice(0, s)    // 시작부터 s 이전까지
        + reverseStr                // 뒤집은 부분
        + my_string.slice(e + 1);   // e 이후부터 끝까지
}