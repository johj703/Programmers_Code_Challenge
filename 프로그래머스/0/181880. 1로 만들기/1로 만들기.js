function solution(num_list) {
    // 총 변환 횟수를 저장할 변수 초기화
    let count = 0;
    
    // 배열의 각 숫자에 대해 반복
    num_list.forEach((num) => {
        // 숫자가 1이 될 때까지 반복
        while(num !== 1) {
            // 짝수인 경우 2로 나누기
            if(num % 2 === 0) {
                num = num / 2;
            // 홀수인 경우 1을 빼고 2로 나누기
            } else {
                num = (num - 1) / 2;
            }
            // 변환 횟수를 1 증가
            count++;
        }
    })
    return count;
}