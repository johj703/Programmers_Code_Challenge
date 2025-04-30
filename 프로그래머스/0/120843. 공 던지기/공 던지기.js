function solution(numbers, k) {
    // 첫 번째 공을 던지는 사람은 1번 위치의 사람
    let answer = 1;
    // k-1번 반복(첫 번째 던지는 사람은 이미 1번으로 설정했기 때문)
    for(let i = 0; i < k - 1; i++){
        // 공을 던지는 사람은 2칸씩 이동(한 명을 건너뛰고 던지기 때문)
        answer += 2;
        // 만약 현재 위치가 전체 인원 수를 초과하면,
        // 원형으로 배치되어 있으므로 처음으로 돌아가야함.
        if(answer > numbers.length) {
            // 전체 인원 수를 빼서 위치를 조정
            answer -= numbers.length
        };
    }
    return answer;
}