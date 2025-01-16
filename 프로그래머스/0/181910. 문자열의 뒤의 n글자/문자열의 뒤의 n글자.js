function solution(my_string, n) {
    // slice => 문자열의 뒷부분을 추출
    // slice(a, b) => 배열의 a번째부터 b-1까지 잘라서 새로운 배열 생성
    // slice(a) => 배열의 a번째부터 배열의 끝까지 잘라서 새로운 배열 생성
    // slice(-a, -b) => 음수를 사용하면 배열의 제일 뒤부터 카운트해서 자른다.
    // my_string.length-n: 문자열 끝에서 n개 앞에 위치
    // my_string.length: 문자열의 끝에 위치
    return my_string.slice(my_string.length-n, my_string.length);
}