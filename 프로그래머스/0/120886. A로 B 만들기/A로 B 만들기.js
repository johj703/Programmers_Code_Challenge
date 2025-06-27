function solution(before, after) {
    // before 문자열을 문자 배열로 변환한 후 알파벳 순으로 정렬
    const beforeASC = [...before].sort();
    // after 문자열을 문자 배열로 변환한 후 알파벳 순으로 정렬
    const afterASC = [...after].sort();
    
    // 두 정렬된 배열을 JSON 문자열로 변환하여 비교
    // 애너그램(anagram): 한 단어의 글자 순서를 바꿔서 다른 단어를 만드는 것
    // ex) listen <-> silent, evil <-> live, heart <-> earth
    // 같으면 애너그램이므로 1, 다르면 0으로 변환
    return JSON.stringify(beforeASC) === JSON.stringify(afterASC) ? 1 : 0;
}