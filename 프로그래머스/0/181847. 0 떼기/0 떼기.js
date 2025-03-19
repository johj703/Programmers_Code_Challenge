function solution(n_str) {
    // 처음으로 0이 아닌 문자가 나타나는 index를 저장할 변수
    let point = 0;
    // 문자열을 처음부터 순회
    for(let i = 0; i < n_str.length; i++){
        // 현재 문자가 "0"이 아니면
        if(n_str[i] !== "0"){
            // 해당 index를 저장
            point = i;
            // 반복문을 종료
            break
        }
    }
    // 처음으로 0이 아닌 문자부터 끝까지 잘라내서 반환
    return n_str.slice(point);
}