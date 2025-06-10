function solution(polynomial) {
    // 다항식을 '+'로 분리하여 각 항을 배열로 만들기
    const arr = polynomial.split(' + '); 
    // x항의 계수 합계
    let xNum = 0;
    // 상수항의 합계
    let num = 0;
    
    // 각 항을 분석하여 x항과 상수항 값 구하기
    arr.forEach((el) => {
        // x가 포함된 항 처리
        if(el.includes("x")){
            const xArr = el.split("x");
            // "x"인 경우(계수가 1)
            if(xArr[0] === ""){
                xNum += 1;
            }
            // "2x", "3x" 등 계수가 있는 경우
            if(xArr[0] !== ""){
                xNum += Number(xArr[0]);
            }
        }
        // x가 없는 항은 상수항
        if(!el.includes("x")){
            num += Number(el);
        }
    })
    
    // 조건의 맞게 결과 문자열을 만들어서 리턴하기
    // x항과 상수항이 모두 0이 아닌 경우
    if(xNum !== 0 && num !== 0){
        return xNum === 1 ? `x + ${num}` : `${xNum}x + ${num}`;
    }
    
    // x항만 있는 경우
    if(xNum !== 0 && num === 0){
        return xNum === 1 ? "x" : `${xNum}x`;
    }
    
    // 상수항만 있는 경우
    if(xNum === 0 && num !== 0){
        return `${num}`;
    }
}