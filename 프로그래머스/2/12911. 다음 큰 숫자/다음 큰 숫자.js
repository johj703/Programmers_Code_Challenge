function solution(n) {
    // 2진수에서 1의 개수를 세는 함수
    const countOnes = (num) => {
        return num.toString(2).split('1').length - 1;
    };

    // n의 2진수에서 1의 개수
    const targetCount = countOnes(n);

    // n + 1부터 시작하여 1의 개수가 같은 첫 번째 수 찾기
    let next = n + 1;
    while (countOnes(next) !== targetCount) {
        next++;
    }
    return next;
}