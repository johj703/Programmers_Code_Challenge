function solution(strlist) {
    // 각 문자열의 길이를 저장할 배열 초기화
    var answer = [];
    // 문자열 배열의 각 원소를 순회
    for(let i = 0; i < strlist.length; i++){
        // 현재 문자열의 길이를 측정하여 answer 배열에 추가
        answer.push(strlist[i].length);
    }
    // 각 문자열의 길이가 담긴 배열을 반환
    return answer;
}