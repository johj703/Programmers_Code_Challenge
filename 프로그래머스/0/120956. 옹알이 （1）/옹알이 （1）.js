function solution(babbling) {
    // 조카가 발음할 수 있는 단어의 개수를 세는 변수
    let answer = 0;
    // 조카가 발음할 수 있는 기본 발음들(각각 최대 한 번씩만 사용 가능)
    const possibleData = ["aya","ye","woo","ma"];
    
    // babbling 배열의 각 단어를 하나씩 검사
    babbling.forEach(word => {
        let result = word;
        
        // 먼저 연속된 같은 발음이 있는지 체크
        let hasConsecutive = false;
        possibleData.forEach(sound => {
           if(result.includes(sound + sound)){
               hasConsecutive = true;
           } 
        });
        
        // 연속된 발음이 있으면 무효 처리
         if(hasConsecutive) {
             // 이 단어는 발음 불가능
             return;
         }
        
        // 연속된 발음이 없다면 유효한 발음들을 공백으로 치환
        possibleData.forEach(sound => {
            result = result.replaceAll(sound, ' ');
        })
        
        // 모든 문자가 공백이면 (trim 후 빈 문자열) 발음 가능한 단어
        if(result.trim() === ''){
            answer++;
        }
    })
    return answer;
}