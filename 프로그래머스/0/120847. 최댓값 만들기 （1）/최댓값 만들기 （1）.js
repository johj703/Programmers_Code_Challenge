function solution(numbers) {
    // 배열을 내림차순으로 정렬
    numbers.sort((a, b) => b - a);
    
    // 두 가지 경우를 비교
    // 1. 가장 큰 수 양수의 곱(양수끼리의 곱이 될 수 있음)
    const product1 = numbers[0] * numbers[1];
    
    // 2. 가장 작은 두 음수의 곱(둘 다 음수면 곱이 양수가 될 수 있기 때문)
    const product2 = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    
    // 두 경우 중 더 큰 값을 반환
    return Math.max(product1, product2);
}