function solution(myString, pat) {
    // pat이 마지막으로 등장하는 위치를 찾기
    const lastIndexOf = myString.lastIndexOf(pat);
    // 처음부터 pat의 마지막 위치까지 자르고
    // 거기에 pat을 붙여서 반환
    return myString.slice(0, lastIndexOf) + pat;
}