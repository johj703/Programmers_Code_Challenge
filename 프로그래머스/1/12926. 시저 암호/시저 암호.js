function solution(s, n) {
    let answer = '';
    for(let i = 0; i < s.length; i++) {
        let sASCII = s.charCodeAt(i)
        
        // charcodeat 메서드를 사용해서 아스키코드 값으로 변환해준다.
        if(sASCII >= 65 && sASCII <= 90) {
            sASCII += n;
            if(sASCII > 90) {
                sASCII -= 26;
                // 소문자라면 그 범위를 넘어서는 90부터 26을 빼서 반대로 z=>a가
                //되는 식을 처리해준다.
            }
        }
        else if (sASCII >= 97 && sASCII <= 122) {
            sASCII += n;
            if(sASCII > 122) {
                sASCII -= 26;
                // 대문자라면 그 범위를 넘어서는 122부터 26을 빼서 뒤로 Z=>A가
                //되는 식을 처리해준다.
            }
        }
        sString = String.fromCharCode(sASCII);
        // String.fromCharCode로 아스키코드 값을 문자열로 형변환
        answer += sString;
        // answer에 넣고 출력
    }
    return answer;
}