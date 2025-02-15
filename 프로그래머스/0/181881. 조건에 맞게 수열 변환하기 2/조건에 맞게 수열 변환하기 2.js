function solution(arr) {
    // 변환 횟수를 저장할 변수를 초기화
    let count = 0;
    // 재귀적으로 배열을 변환하는 내부 함수
    const loopArr = (arr, count) => {
        // 현재 배열의 각 원소를 조건에 따라 변환
        let arr1 = arr.map((v) => {
            // 50 이상이고 짝수인 경우 2로 나누기
            if(v >= 50 && v % 2 === 0) {
                return v / 2;
            // 50 미만이고 홀수인 경우 2를 곱하고 1을 더하기
            } else if(v < 50 && v % 2 === 1) {
                return v * 2 + 1;
            // 위 조건에 해당하지 않는 경우 원래 값을 유지
            } else {
                return v;
            }
        });
        // 변환 전과 후의 배열이 완전히 같은지 확인
        // 같다면 현재까지의 변환 횟수를 반환
        if (arr1.every((v, i) => v === arr[i])) return count;
        // 변환 횟수를 1 증가
        count++;
        // 변환된 배열로 다시 함수를 호출
        return loopArr(arr1, count);
    }
    return loopArr(arr, count);
}