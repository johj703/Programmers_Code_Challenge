function solution(str_list, ex) {
    return str_list
        .filter(a => !a.includes(ex))   // ex를 포함하지 않는 문자열만 필터링
        .join('');  // 필터링된 문자열들을 이어 붙이기
}