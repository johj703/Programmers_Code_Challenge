/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise<number>}
 */
var addTwoPromises = async function (promise1, promise2) {
    // 실무 안전성(Unhandled Rejection 방지)과 명시적 병렬 대기 의도를 위해 Promise.all 사용
    const [value1, value2] = await Promise.all([promise1, promise2]);
    return value1 + value2;
};