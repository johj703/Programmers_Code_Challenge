function solution(q, r, code) {
    // [...code] => 문자열을 배열로 변환
    // filter((x, i) => i % q === r) => 인덱스를 q로 나눈 나머지가 r인 문자만 선택
    // join("") => 선택된 문자들을 문자열로 연결
    return [...code].filter((x, i) => i % q === r).join("");
}