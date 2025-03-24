function solution(str1, str2) {
    // includes 메서드를 사용해서 str2에 str1이 포함되어 있는지 확인
    if(str2.includes(str1)){
        // str1이 str2에 포함되어 있으면 1을 반환
        return 1;    
    } else {
        // str1이 str2에 포함되어 있지 않으면 0을 반환
        return 0;
    }
    
}