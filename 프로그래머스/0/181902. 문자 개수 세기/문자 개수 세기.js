function solution(my_string) {
    // 52개(대문자 26개 + 소문자 26개)의 카운터를 0으로 초기화
    let cnt = Array(52).fill(0);
    
    // 문자열의 각 문자를 순회
    for(let i = 0; i < my_string.length; i++){
        let char = my_string[i];
        
        // 대문자인 경우 (A-Z)
        if('A' <= char && 'Z' >= char) {
            // charCodeAt(0)으로 문자의 아스키코드 값을 얻음
            // 'A'의 아스키코드를 빼서 0-25 사이의 인덱스로 변환
            // 예: 'A'(65) - 'A'(65) = 0번 인덱스
            //     'B'(66) - 'A'(65) = 1번 인덱스
            cnt[char.charCodeAt(0) - 'A'.charCodeAt(0)] += 1;
        }
        
        // 소문자인 경우 (a-z)
        else if('a' <= char && 'z' >= char) {
            // 소문자의 경우 26을 더해서 26-51 사이의 인덱스에 저장
            // 예: 'a'(97) - 'a'(97) + 26 = 26번 인덱스
            //     'b'(98) - 'a'(97) + 26 = 27번 인덱스
            cnt[char.charCodeAt(0) - 'a'.charCodeAt(0) + 26] += 1;
        }
    }
    return cnt;
}