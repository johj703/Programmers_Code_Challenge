function solution(a, b, c, d) {
    var answer = 0;
    const dice = [a, b, c, d];
    // 객체 생성
    let obj = {};
    for(let i = 0; i < dice.length; i++) {
        if(obj[dice[i]]){
            obj[dice[i]]++
        } else {
            obj[dice[i]] = 1
        }
    }
    // key값만 추출
    const arr = Object.keys(obj);
    // key값을 정수로 바꾸기
    const keys = arr.map(item => parseInt(item));
    const values = Object.values(obj);
    if(values.length === 1){ // 전부 같은 경우
        answer = 1111 * keys[0];
        return answer;
    } else if(values.length === 2) {
        if(values[0] === 2) { // 두 개씩 같은 경우
            answer = (keys[0] + keys[1]) * Math.abs(keys[0] - keys[1]);
            return answer;
        } else {
            // 세 개가 같은 경우
            if(values[1] === 3) {
                answer = (10 * keys[1] + keys[0]) ** 2;
                return answer;
            } else {
                answer = (10 * keys[0] + keys[1]) ** 2;
                return answer;
            }
        }
    } else if(values.length === 3){
        // 두 개가 같고 나머지 두 개는 다른 경우
        answer = 1;
        for(let i = 0; i < values.length; i++) {
            if(values[i] === 1) {
                answer *= keys[i];
            }
        }
        return answer;
    } else {
        // 모두 다른 경우
        answer = Math.min(...keys)
        return answer;
    }
}