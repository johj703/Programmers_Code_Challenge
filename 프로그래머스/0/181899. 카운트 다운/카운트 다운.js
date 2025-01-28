function solution(start_num, end_num) {
    // 결과를 저장할 빈 배열 초기화
    let list = [];
    // start_num부터 end_num까지 1씩 감소하면서 반복
    for(i = start_num; i >= end_num; i--){
        // 현재 숫자를 배열에 추가
        list.push(i);
    }
    return list;
}