function solution(num_list, n) {
    // slice 메서드를 사용해서 n-1 index부터 끝까지 자름
    // n-1부터 시작하는 이유는 index는 0부터 시작하기 때문이다!
    return num_list.slice([n-1]);
}