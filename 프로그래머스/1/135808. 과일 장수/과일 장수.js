function solution(k, m, score) {
    // 가격 = p, 최고점 = k, 사과 개수 = m
    var answer = 0;
    // 사과의 점수를 내림차순으로 정렬
    score.sort((a, b) => b - a);
    
    // 박스에 담을 수 있는 개수(m)를 사용해서 박스의 개수를 구하기
    let box = Math.floor(score.length / m);
    
    // 박스의 개수만큼 반복문
    for(let i = 1; i <= box; i++){
        
        // (박스에 담긴 사과의 최소 값) * m을 answer에 더하면서 담기
        answer += score[m*i-1] * m;
    }
    return answer;
}