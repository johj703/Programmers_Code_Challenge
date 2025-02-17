function solution(num_list) {
    // 원소들의 합을 저장할 변수 초기화
    let add = 0;
    // 원소들의 곱을 저장할 변수 초기화
    let mul = 1;
    // 최종 결과를 저장할 변수를 초기화
    let result = 0;
    
    // 배열의 각 원소에 대해 반복
    for(let i in num_list) {
        // 배열의 길이가 11 이상인 경우
        if(num_list.length >= 11) {
            // 원소들을 더하기
            add += num_list[i]
            result = add;
        // 배열의 길이가 10 이하인 경우
        } else {
            // 원소들을 곱하기
            mul *= num_list[i]
            result = mul;
        }
    }
    return result;
}