function solution(sides) {
    // 결과값을 저장할 변수를 초기화
    var answer = 0;
    
    // 배열을 오름차순으로 정렬
    // 정렬 후: sides[0]은 가장 작은 값, sides[2]는 가장 큰 값이 됨
    sides.sort(function(a, b) {
        return a - b;
    });
    // 삼각형 조건 검사: 가장 긴 변(sides[2])이 다른 두 변의 합보다 작아야 함.
    if(sides[2] >= sides[0] + sides[1]) {
        // 조건을 만족하지 않으면 삼각형을 만들 수 없음
        answer = 2;
    } else {
        // 조건을 만족하면 삼각형을 만들 수 있음
        answer = 1;
    }
    return answer;
}