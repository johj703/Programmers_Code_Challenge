function solution(arr1, arr2) {
    // 배열의 길이 계산
    const arr1Len = arr1.length;
    const arr2Len = arr2.length;
    // 길이가 다르면, 길이가 큰 배열이 더 큰 것으로 판단
    if(arr1Len !== arr2Len) return arr1Len > arr2Len ? 1 : -1;
    
    // 요소의 합 계산
    const arr1Sum = arr1.reduce((acc, cur) => acc+cur, 0);
    const arr2Sum = arr2.reduce((acc, cur) => acc+cur, 0);
    // 합이 같으면 0을 반환하고, 다르면 합이 큰 배열이 더 큰 것으로 판단
    if(arr1Sum === arr2Sum) return 0;
    return arr1Sum > arr2Sum ? 1 : -1;
}