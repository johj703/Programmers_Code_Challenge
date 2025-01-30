function solution(n, slicer, num_list) {
    // slicer 배열을 구조분해할당으로 a, b, c 변수에 할당
    let [a, b, c] = [...slicer];
    
    // n값에 따라 다른 슬라이스 방법 적용
    switch(n) {
        case 1:
            // 0부터 b까지 자르기
            return num_list.slice(0, b + 1);
        case 2:
            // a부터 끝까지 자르기
            return num_list.slice(a);
        case 3:
            // a부터 b까지 자르기
            return num_list.slice(a, b + 1);
        case 4:
            // slice: a부터 b까지 자르기
            // filter: 자른 배열에서 c간격으로 요소를 선택
            // idx: 현재 인덱스(0부터 시작)
            // idx % c는 인덱스를 c로 나눈 나머지
            // !(idx % c)는 나머지가 0일 때, true
            // 즉, c간격으로 요소를 선택함
            return num_list.slice(a, b + 1).filter((_, idx) => !(idx % c));
    }
}