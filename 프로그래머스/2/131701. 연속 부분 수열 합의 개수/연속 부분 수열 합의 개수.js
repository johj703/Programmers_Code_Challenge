function solution(elements) {
    const sumSet = new Set();
    
    const len = elements.length;
    // 연속 부분 수열의 길이
    for (let i = 1; i <= len; i++) {
        // 슬라이딩 윈도우
        let sum = 0;
        // 연속 부분 수열 시작 지점 인덱스
        for(let j = 0; j < len; j++) {
            if(j === 0) {
                for(let k = 0; k < i; k++) {
                    sum += elements[k];
                }
            } else {
                sum -= elements[j - 1];
                sum += elements[(j + i -1) % len];
            }
            sumSet.add(sum);
        }
    }
    // 원형 수열의 연속 부분 수열 합으로 만들 수 있는 수의 개수를 return
    return sumSet.size;
}