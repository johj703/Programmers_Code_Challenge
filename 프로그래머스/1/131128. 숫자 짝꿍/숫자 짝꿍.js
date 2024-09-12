function solution(X, Y) {
    let result = "";
    
    // 각 숫자의 등장 횟수를 저장하는 함수
    const setting = (str) => {
        const dict = {};
        
        [...str].forEach((v) => 
            dict[v] !== undefined ? dict[v]++ : (dict[v] = 1)
        );
        return dict;
    };
    
    const dictX = setting(X);
    const dictY = setting(Y);
    
    // 가장 큰 숫자를 구하기 위해 9부터 0까지 역순으로 조회
    for(let i = 9; i >= 0; i--) {
        // 등장 횟수에서 더 적은 값만큼 숫자를 문자열에 추가
        if(dictX[i] && dictY[i])
            result += String(i).repeat(Math.min(dictX[i], dictY[i]));
    }
    
    // 결과가 0으로만 구성된 경우 return 값을 0으로 선택
    if(result[0] === "0") return "0";
    return result.length > 0 ? result : "-1";
}