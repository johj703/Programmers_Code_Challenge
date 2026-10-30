/**
 * @param {number} n
 * @return {number}
 */
// 1. 최적화된 반복문 풀이 (O(n) 시간, O(1) 공간)
var climbStairs = function (n) {
    if (n <= 2) return n; // n = 1, 2 처리 단축

    let previousPrevWays = 1; // n-2번째 계단까지의 방법 수
    let previousWays = 2; // n-1번째 계단까지의 방법 수
    let currentWays = 0; // 현재 n번째 계단까지의 방법 수 (스코프 고려하여 바깥 선언)

    for (let step = 3; step <= n; step++) {
        currentWays = previousPrevWays + previousWays;
        previousPrevWays = previousWays; // 순서 중요: prevWays가 덮어씌워지기 전에 옮김
        previousWays = currentWays;
    }

    return currentWays;
};

// 2. 무식한 재귀 풀이 (비교 검증용)
var climbStairsRecursive = function (n) {
    if (n <= 2) return n;
    return climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2);
};