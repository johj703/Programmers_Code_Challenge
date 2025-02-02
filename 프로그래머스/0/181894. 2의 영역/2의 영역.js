function solution(arr) {
    // 배열에서 첫 번째 2의 위치 찾기
    const firstIndex = arr.indexOf(2);
    // 배열에서 마지막 2의 위치 찾기
    const lastIndex = arr.lastIndexOf(2);
    
    // 2가 없는 경우(firstIndex가 -1일 때)
    if(firstIndex === -1) {
        return [-1];
    }
    
    // 첫 번째 2부터 마지막 2까지의 구간 추출
    return arr.slice(firstIndex, lastIndex + 1);
}