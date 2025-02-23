function solution(myString, pat) {
    // 문자열을 배열로 변환하고 각 위치에서 검사를 수행
    return [...myString].reduce((acc, cur, idx) => {
        // 현재 위치(idx)부터 패턴의 길이만큼 문자열을 잘라내기
        const curStr = myString.slice(idx, pat.length + idx)
        // 잘라낸 문자열이 패턴고자 일치하면 카운트를 1 증가
        if(curStr === pat) return acc + 1
        // 일치하지 않으면 기존 카운트를 유지
        return acc
    }, 0); // 초기 카운트 값은 0
}