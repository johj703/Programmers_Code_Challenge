/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let hasBeenCalled = false;

    return function (...args) {
        if (!hasBeenCalled) {
            // fn 내부에서 예외(Error)가 발생하더라도 재호출을 막기 위해 실행 직전에 플래그를 먼저 변경한다.
            hasBeenCalled = true;
            return fn(...args);
        }
        return undefined;
    };
};