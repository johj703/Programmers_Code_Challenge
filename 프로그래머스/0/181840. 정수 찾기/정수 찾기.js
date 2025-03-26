function solution(num_list, n) {
    // includes 메서드를 사용해서 num_list에 n이 포함되어 있는지 확인
    if(num_list.includes(n)){
        // n이 포함되어 있으면 1을 반환
        return 1;
    } else {
        // n이 포함되어 있지 않으면 0을 반환
        return 0;
    }
}