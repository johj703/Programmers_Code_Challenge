function solution(my_string, target) {
    // includes 메서드를 사용해서 my_string에 target이 포함되어 있는지 확인
    if(my_string.includes(target)){
        // target이 포함되어 있으면 1을 반환
        return 1;
    } else {
        // target이 포함되어 있지 않으면 0을 반환
        return 0;
    }
}