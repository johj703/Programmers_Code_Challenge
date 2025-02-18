function solution(myString, pat) {
    // 두 문자열을 모두 대문자로 변환하여 비교
    // indexOf로 pat의 위치를 찾고,
    // 결과가 -1보다 크면(패턴이 존재하면) 1을,
    // 그렇지 않으면(패턴이 없으면) 0을 반환
    return (myString.toUpperCase()).indexOf(pat.toUpperCase()) > -1 ? 1 : 0;
}