function solution(num_list) {
    // 홀수 index 합을 저장할 변수
    let odd = 0;
    // 짝수 index 합을 저장할 변수
    let even = 0;
    
    // 배열의 모든 요소를 순회
    for(let i = 0; i < num_list.length; i++) {
        // 홀수 index인 경우
        if(i % 2 === 1) {
            odd += num_list[i];
        // 짝수 index인 경우
        } else if (i % 2 === 0) {
            even += num_list[i];
        }
    }
    // 홀수 index 합이 더 크면 odd 반환
    if(odd > even) {
        return odd;
    // 짝수 index 합이 더 크거나 같으면 even 반환
    } else {
        return even;
    }
}