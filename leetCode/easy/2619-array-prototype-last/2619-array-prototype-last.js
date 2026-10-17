Array.prototype.last = function() {
    // 📌 화살표 함수가 아닌 전통적 function 문법을 써야 호출 주체인 배열 인스턴스가 this로 동적 바인딩이 됨
    if (this.length === 0) {
        return -1;
    }
    return this[this.length - 1];
};