function solution(num_list, n) {
    return [
    // 1. n 위치부터 끝까지 자르기
    ...num_list.slice(n), 
    // 2. 처음부터 n-1 위치까지의 자르기
    ...num_list.slice(0, n)
    ];
}