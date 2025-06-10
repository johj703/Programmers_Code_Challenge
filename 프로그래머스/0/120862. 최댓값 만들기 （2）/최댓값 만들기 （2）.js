function solution(numbers) {
    // 모든 두 수의 곱을 저장할 배열
    let answer = [];
    
    // 첫 번째 수: 배열의 마지막 전 요소까지 반복
    for(let i = 0; i < numbers.length - 1; i++){
        // 두 번째 수: 첫 번째 수 다음 요소부터 배열 끝까지 반복
        for(let j = i + 1; j < numbers.length; j++){
            // 두 수의 곱을 결과 배열에 추가
            answer.push(numbers[i] * numbers[j]);
        }
    }
    // 모든 곱 중에서 최대값 반환
    return Math.max(...answer);
}