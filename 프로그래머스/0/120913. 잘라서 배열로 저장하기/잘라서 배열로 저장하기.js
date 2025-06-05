function solution(my_str, n) {
    // 문자열을 문자 배열로 분해
    let strArr = my_str.split("");
    // 결과를 저장할 배열
    let answer = [];
    
    // 문자 배열에 요소가 남아있는 동안 반복
    while(strArr.length > 0){
        // 배열 앞에서부터 n개씩 잘라내고, 다시 문자열로 합쳐서 결과 배열에 추가
        answer.push(strArr.splice(0, n).join(""));
    }
    // 길이 n씩 잘린 문자열들의 배열 반환
    return answer;
}