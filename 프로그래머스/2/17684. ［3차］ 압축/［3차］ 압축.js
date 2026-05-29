function solution(msg) {
    // 1. 사전 초기화 (A=1, B=2, ..., Z=26)
    const dict = new Map();
    for (let i = 0; i < 26; i++) {
        dict.set(String.fromCharCode(65 + i), i + 1);
    }
    
    const result = [];
    let i = 0;
    
    while (i < msg.length) {
        // 2. 가장 긴 일치 문자열 w 찾기
        let w = msg[i];
        
        while (i + w.length < msg.length && dict.has(w + msg[i + w.length])) {
            w += msg[i + w.length];  // w를 한 글자씩 늘리기
        }
        
        // 3. w의 색인 번호 출력
        result.push(dict.get(w));
        
        // 4. 다음 글자 c가 있으면 w+c를 사전에 등록
        if (i + w.length < msg.length) {
            const c = msg[i + w.length];
            dict.set(w + c, dict.size + 1);
        }
        
        // 5. 다음 위치로 이동
        i += w.length;
    }
    
    return result;
}