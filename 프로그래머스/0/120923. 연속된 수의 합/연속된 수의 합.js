function solution(num, total) {
    // 연속된 num개 수의 첫 번째 수(시작값) 계산
    // 공식: 첫 번째 수 = (총 합/ 개수) - (개수 - 1) / 2
    const a = total / num - (num - 1) / 2;
    
    // 시작값 a부터 num개의 연속된 정수 배열 생성
    // Array.from({length: 개수}, (값, index) => 시작값 + index)
    return Array.from({length: num}, (_, i) => a + i);
}