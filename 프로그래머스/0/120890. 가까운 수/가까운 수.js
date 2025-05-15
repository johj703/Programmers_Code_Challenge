function solution(array, n) {
    // 각 요소와 n의 차이(절대값)를 저장할 배열을 초기화
    let answer = [];
    // 배열을 오름차순으로 정렬
    // 이는 같은 차이를 가진 값이 여러 개일 때, 더 작은 값을 선택하기 위함
    array.sort((a, b) => a - b);
    // 배열의 각 요소를 순회하면서 n과의 차이(절대값)를 계산
    for(let i of array) {
        // Math.abs()는 절대값을 반환하는 함수
        // 각 요소와 n 사의 거리를 구하기
        answer.push(Math.abs(i - n))
    }
    // 계산된 차이 중 최소값의 index를 찾기
    // Math.min(...answer)로 가장 작은 차이를 구하고,
    // indexOf로 그 차이값의 위치(index)를 찾기
    let num = answer.indexOf(Math.min(...answer));
    
    // 찾은 index를 사용하여 원래 배열에서 해당 위치의 값을 반환
    return array[num];
}