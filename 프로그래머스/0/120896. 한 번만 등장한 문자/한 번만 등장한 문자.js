function solution(s) {
    // 문자열을 배열로 변환
    let arr = s.split('');
    
    // 고유한 문자만 추출하고 사전 순으로 정렬
    // Set은 중복을 제거하고, sort()는 문자를 사전 순으로 정렬
    const uniqueArr = [...new Set(arr)].sort();
    
    // 각 고유 문자의 등장 횟수를 저장할 배열을 생성하고 0으로 초기화
    let countArr = Array.from(Array(uniqueArr.length)).fill(0);
    
    // 원본 문자열의 각 문자에 대해
    for(let i of arr) {
        // 해당 문자가 uniqueArr의 어느 위치에 있는지 확인하고 등장 횟수를 증가
        for(let j = 0; j <= uniqueArr.length; j++){
            if(i === uniqueArr[j]) {
                countArr[j]++;
            }
        }
    }
    
    // countArr가 1인(한 번만 등장하는 문자)만 변수에 합쳐 return한다.
    let str = '';
    countArr.forEach((e, idx) => {
        if(e === 1) {
            str += uniqueArr[idx];
        }
    })
    
    return str;
}