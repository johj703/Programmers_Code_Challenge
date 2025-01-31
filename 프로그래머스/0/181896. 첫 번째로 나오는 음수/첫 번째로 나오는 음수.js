function solution(num_list) {
    // findIndex: 조건을 만족하는 첫 번째 요소의 인덱스를 반환
    // a < 0: 현재 숫자가 0보다 작은지(음수인지) 확인
    return num_list.findIndex(a => a < 0);
}