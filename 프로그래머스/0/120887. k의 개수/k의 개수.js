function solution(i, j, k) {
    // i부터 j까지의 연속된 숫자 배열 생성
    // Array.from(Array(길이), (값, index) => 변환함수)
    // 길이: j - i + 1, 각 요소: i + index
    let arr = Array.from(Array(j - i + 1), (x, y) => i + y);
    
    // 배열의 모든 숫자를 하나의 문자열로 연결
    // ex) [1, 2, 10, 11] -> "121011"
    const str = arr.join('');
    
    // 전제 문자열 길이에서 k를 모두 제거한 문자열 길이를 빼면 k의 등장 횟수
    // 원리: 원본 길이 - (k 제거 후 길이) = k가 등장한 횟수
    return str.length - str.replaceAll(k, '').length;
}