function solution(my_string) {
    // 문자열의 길이를 미리 저장
    const strLen = my_string.length;
    
    // 문자열을 배열로 변환한 후 reduce 메서드 사용
    return [...my_string].reduce((acc, cur, idx) => {
        // 현재 index부터 문자열 끝까지의 부분 문자열(접미사) 추출
        const curStr = my_string.slice(idx, strLen)
        // 누적 배열에 현재 접미사 추가
        return [...acc, curStr]
    }, []) // 초기 값으로 빈 배열 설정
    .sort(); // 모든 접미사를 사전순으로 정렬
}