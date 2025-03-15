function solution(num_list) {
    return num_list
        .sort((a, b) => a - b)  // 배열을 오름차순으로 정렬
        .slice(5);  // 앞의 5개 요소를 제외한 나머지를 선택
}