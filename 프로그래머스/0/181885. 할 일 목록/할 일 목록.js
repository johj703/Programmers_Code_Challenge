function solution(todo_list, finished) {
    // filter 메서드로 미완료 항목만 선택
    // v: todo_list의 각 할 일
    // i: 현재 index
    // !finished[i]: 해당 index의 완료 여부가 false인 경우에 선택
    return todo_list.filter((v, i) => !finished[i]);
}