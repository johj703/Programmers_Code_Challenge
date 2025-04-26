function solution(rsp) {
    var answer = '';
    
    // 입력 문자열의 각 문자를 순회
    for(let i = 0; i < rsp.length; i++) {
        // 현재 위치의 문자(가위, 바위, 보)를 가져오기
        let ch = rsp.charAt(i);
        
        // 상대가 가위(2)를 냈다면 바위(0)로 이김
        if(ch === "2") {
            answer += "0";
        }
        // 생대가 바위(0)을 냈다면 보(5)로 이김
        else if(ch === "0") {
            answer += "5";
        }
        // 상대가 보(5)를 냈다면 가위(2)로 이김
        else if(ch === "5") {
            answer += "2";
        }
    }
    return answer;
}