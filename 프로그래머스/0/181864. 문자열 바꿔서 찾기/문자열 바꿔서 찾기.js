function solution(myString, pat) {
    return myString
        .split("")  // 문자열을 개별 문자 배열로 변환
        .map((a) => (a === "A" ? "B" : "A"))    // 'A'는 'B'로, 그 외 문자(여기서는 'B')는 'A'로 변환
        .join("")   // 변환된 문자 배열을 다시 문자열로 합치기
        .includes(pat) ? 1 : 0; // 변환된 문자열에 pat이 포함되어 있으면 1, 아니면 0을 반환.
}