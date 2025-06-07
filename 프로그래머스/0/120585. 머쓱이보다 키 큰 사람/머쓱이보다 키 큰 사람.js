function solution(array, height) {
    // 머쓱이보다 키 큰 사람의 수를 세기 위한 카운터
    let answer = 0;
    
    // 배열의 각 키 값에 대해 반복(for...of)
    for(i of array) {
        // 삼항 연산자: 현재 키가 머쓱이 키보다 크면 카운터 증가, 아니면 그대로 유지
        i > height ? answer += 1 : answer
    }
    // 머쓱이보다 키 큰 사람의 총 수 반환
    return answer;
}