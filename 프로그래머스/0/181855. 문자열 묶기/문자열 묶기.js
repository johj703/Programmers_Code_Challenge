function solution(strArr) {
    // 문자열 길이별로 개수를 저장할 객체를 초기화
    const obj = {};
    // 배열의 각 문자열을 순회
    strArr.forEach((x, i) => {
        // obj[x.length]가 이미 존재하면 1을 더하고, 없으면 1로 설정
        // '||' 연산자를 이요한 단축 평가로 값이 없을 경우 1을 할당
        obj[x.length] = obj[x.length] + 1 || 1;
    })
    // 객체의 모든 값들 중 최대값을 찾아 반환
    return Math.max(...Object.values(obj));
}