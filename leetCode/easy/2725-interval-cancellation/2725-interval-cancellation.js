/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    /*
     * 요구사항에 따라 fn이 args와 함께 즉시(0ms 시점에) 1회 호출되도록 실행한다.
     */
    fn(...args);

    /*
     * 즉시 호출 이후 t밀리초 간격으로 fn이 반복 실행되도록 예약을 걸고 타이머 식별자를 저장한다.
     */
    const timerId = setInterval(() => {
        fn(...args);
    }, t);

    /*
     * 언제든 호출하여 반복 실행을 중단할 수 있는 취소 함수를 반환한다.
     */
    const cancelFn = function () {
        clearInterval(timerId);
    };

    return cancelFn;
};