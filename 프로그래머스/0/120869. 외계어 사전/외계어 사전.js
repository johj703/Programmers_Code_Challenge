function solution(spell, dic) {
    // 조건을 만족하는 단어들을 저장할 배열
    const isThere = [];
    
    // 사전의 각 단어를 확인
    dic.forEach((word) => {
        // spell의 각 글자가 단어에 포함되어 있는지 확인하는 카운터
        let count = 0;
        
        // spell의 각 글자에 대해 확인
        spell.forEach((item) => {
            // 단어에 해당 글자가 포함되어 있으면 카운트 증가
            if(word.includes(item)){
                count += 1;
            }
        })
        // spell의 모든 글자가 포함되어 있고, 단어 길이가 spell 길이와 같으면 조건 만족
        if(count === spell.length && word.length === spell.length){
            isThere.push(word);
        }
    })
    // 조건을 만족하는 단어가 있으면 1, 없으면 2 반환
    return isThere.length === 0 ? 2 : 1;
}