function solution(arr, delete_list) {
    // filter 메서드를 사용해서 원본 배열을 순회해면서 조건에 맞는 요소만 선택
    // a는 현재 검사 중인 arr의 요소
    // !delete_list.includes(a)는 현재 요소가 delete_list에 포함되지 않는지 확인
    // 포함되지 않으면 true를 반환해서 해당 요소를 유지, 포함되면 false를 반환하여 제거
    return arr.filter(a => !delete_list.includes(a));
}