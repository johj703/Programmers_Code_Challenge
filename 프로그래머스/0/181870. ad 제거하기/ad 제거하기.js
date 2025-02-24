function solution(strArr) {
    // filter를 사용해서 'ad'를 포함하지 않는 문자열만 선택
    // includes('ad')가 false인 요소만 남기기
    return strArr.filter(a => !a.includes('ad'));
}