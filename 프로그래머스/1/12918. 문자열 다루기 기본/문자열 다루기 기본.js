function solution(s) {
    // s의 길이가 4 또는 6이 아닐 경우 false를 리턴
    if(s.length !== 4 && s.length !== 6) return false;
    
    // 문자열을 하나씩 가져와 숫자로 변환 되는지 확인
    // 숫자로 변환되지 못할 경우 false를 리턴
    for(let i = 0; i < s.length; i++) {
       if (isNaN(s[i])) return false;
    }
    
    // 모두 통과했을 경우 true를 리턴
    return true;
}