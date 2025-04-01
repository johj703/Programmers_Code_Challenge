function solution(arr) {
    // 1. 행, 열이 같은 경우(이미 정사각 행렬인 경우)
    if(arr.length === arr[0].length){
        return arr;
    }
    
    // 2. 행, 열이 같지 않은 경우
    // 행과 열 중 더 큰 값을 구한다.
    const max = Math.max(arr.length, arr[0].length);
    // 배열을 순회하며 필요한 부분을 확장
    for(let i = 0; i < max; i++) {
        // 행이 부족한 경우(행 < 열)
        if(arr[i] === undefined) {
            // 새로운 행을 0으로 채워 추가
            arr[i] = new Array(max).fill(0);
        }
        // 행은 있지만 열이 부족한 경우(행 > 열)
        else if(arr[i].length < max) {
            // 부족한 열만큼 0을 추가
            arr[i] = [...arr[i], ...new Array(max - arr[i].length).fill(0)];
        }
    }
    return arr;
}