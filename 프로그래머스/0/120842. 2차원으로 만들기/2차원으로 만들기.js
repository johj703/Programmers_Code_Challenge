function solution(num_list, n) {
    // 결과를 저장할 2차원 배열을 초기화
    const answer = [];
    
    // num_list의 길이를 n으로 나눈 몫만큼 반복
    // 이는 생성될 2차원 배열의 행 개수와 같음
    for(let i = 0; i < num_list.length / n; i++){
        // num_list에서 i번째 그룹의 원소들을 추출
        // slice(시작 index, 끝 index)를 사용하여 배열의 일부분을 자르기
        // i * n: 현재 그룹의 시작 index
        // i * n + n: 현재 그룹의 끝 index(다음 그룹의 시작 index)
        answer.push(num_list.slice(i * n, i * n + n))
    }
    return answer;
}