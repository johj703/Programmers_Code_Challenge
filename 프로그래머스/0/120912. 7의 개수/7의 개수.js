function solution(array) {
    // 7의 개수를 세기 위한 카운터 변수 선언
    let count = 0;
    
    // 배열의 각 숫자에 대해 반복
    array.forEach((item) => {
        // 숫자를 문자열로 변환 후 각 자릿수로 분리
        let itemArr = String(item).split("");
        
        // 각 자릿수를 확인
        itemArr.forEach((digit) => {
            // 자릿수가 "7"인지 확인
            if(digit === "7"){
                // 7을 발견하면 카운터 증가
                count++;
            }
        })
    })
    // 총 7의 개수 반환
    return count;
}