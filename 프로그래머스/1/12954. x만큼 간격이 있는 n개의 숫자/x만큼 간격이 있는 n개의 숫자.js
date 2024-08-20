function solution(x, n) {
    let arr = [];
    for(i=x; arr.length < n; i += x) {
        arr.push(i)
    }
    return arr
}