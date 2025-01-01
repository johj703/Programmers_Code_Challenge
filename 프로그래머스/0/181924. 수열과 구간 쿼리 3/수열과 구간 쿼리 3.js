function solution(arr, queries) {
    queries.map((query) => {
        let i = query[0];
        let j = query[1];
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    })
    return arr;
}