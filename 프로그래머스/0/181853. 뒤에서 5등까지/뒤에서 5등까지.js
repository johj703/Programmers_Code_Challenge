function solution(num_list) {
    return num_list
        .sort((a, b) => a - b)  // 배열을 오름차순으로 정렬
        .slice(0, 5);   // 정렬된 배열에서 앞에서 5개 요소만 선택
}