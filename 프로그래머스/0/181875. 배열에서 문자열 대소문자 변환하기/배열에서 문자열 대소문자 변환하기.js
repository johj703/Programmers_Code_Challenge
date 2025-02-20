function solution(strArr) {
    // 배열의 각 문자열을 index에 따라 변환
    return strArr.map((str, i) => {
        // 짝수 index인 경우 소문자로 변환
        if(i % 2 === 0) {
            return str.toLowerCase();
        // 홀수 index인 경우 대문자로 변환
        } else {  
            return str.toUpperCase();
        }
    });
}