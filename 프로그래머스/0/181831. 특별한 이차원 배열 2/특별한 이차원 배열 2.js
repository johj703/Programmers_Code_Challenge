function solution(arr) {
    var answer = 0;
    // 배열의 모든 요소를 순회
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++) {
            // arr[i][j]와 arr[j][i]를 비교하여 대칭인지 확인
            // 대칭 행렬은 전치 행렬과 같아야 함(arr[i][j] = arr[j][i])
            if(arr[i][j] !== arr[j][i]) {
                // 대칭이 아닌 요소가 하나라도 있으면 0을 반환
                return answer = 0;
            } else {
                // 현재까지 모든 요소가 대칭이면 answer를 1로 설정
                answer = 1;
            }
        }
    }
    // 모든 검사를 통과했다면 answer 값인 1을 반환
    return answer;
}