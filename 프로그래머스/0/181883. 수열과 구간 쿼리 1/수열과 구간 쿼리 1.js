function solution(arr, q) {
    // q 배열의 각 구간 정보 [a[0], a[1]]를 순회
    q.map((a) => {
        // a[0]부터 a[1]까지의 index를 순회
        for(let i = a[0]; i <= a[1]; i++){
            // 해당 index의 원소에 1을 더하기
            arr[i] += 1;
        }
    })
    return arr;
}