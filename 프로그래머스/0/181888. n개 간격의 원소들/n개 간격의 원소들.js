function solution(num_list, n) {
    // 결과를 저장할 빈 배열 생성
    let list = [];
    // 배열을 n간격으로 순회
    // i를 1씩 증가하지 않고 n씩 증가
    for(let i = 0; i < num_list.length; i += n) {
        // n간격의 요소를 새 배열에 추가
        list.push(num_list[i]);
    }
    return list;
}