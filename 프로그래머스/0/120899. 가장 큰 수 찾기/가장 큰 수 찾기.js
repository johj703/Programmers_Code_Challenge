function solution(array) {
    // 배열에서 가장 큰 수를 찾아 변수에 저장
    // Math.max()는 주어진 숫자들 중 최댓값을 반환하고
    // 스프레드 연산자(...)를 사용하여 배열들 개별 인수로 펼쳐서 전달.
    const maxValue = Math.max(...array);
    // 가장 큰 수와 그 수가 처음 등장하는 index를 배열로 반환
    return [maxValue, array.indexOf(maxValue)];
}