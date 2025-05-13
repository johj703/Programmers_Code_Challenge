function solution(my_string) {
    // 문자열을 배열로 변환한 후 Set 객체를 생성
    // Set은 중복된 값을 허용하지 않는 자료구조로, 자동으로 중복을 제거함.
    var answer = new Set([...my_string]);
    // Set 객체를 다시 배열로 변환한 후, 배열의 모든 요소를 하나의 문자열로 결합
    // [...answer]는 Set 배열로 변환하고, join('')은 배열 요소를 공백 없이 결합
    return [...answer].join('');
}