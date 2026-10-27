/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    const filteredArray = [];
    for (let currentIndex = 0; currentIndex < arr.length; currentIndex++) {
        // fn의 반환값이 truthy인 경우에만 원본 원소를 새 배열에 추가
        if (fn(arr[currentIndex], currentIndex)) {
            filteredArray.push(arr[currentIndex]);
        }
    }
    return filteredArray;
};