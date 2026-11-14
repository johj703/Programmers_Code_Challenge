/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    // 원문에 arr을 수정해도 되는지 언급이 없어서, 원본을 바꾸지 않도록 복사본([...arr])을 정렬한다.
    // 복사본 때문에 공간을 O(n)만큼 더 쓴다.
    return [...arr].sort((a, b) => fn(a) - fn(b));
};