function solution(age) {
    // 숫자를 문자열로 변환한 후 각 자릿수를 분리하여 배열로 만들기
    const ageArr = String(age).split('');
    // 변환 결과를 저장할 변수 초기화
    let answer = "";
    
    // 각 자릿수를 순회하면서 해당하는 알파벳으로 변환
    for(let i = 0; i < ageArr.length; i++) {
        // 각 숫자에 97을 더해서 소문자 알파벳의 ASCII 코드로 변환
        // 97은 'a'의 ASCII 코드이므로, 0->a, 1->b, ... 9->j로 변환
        answer += String.fromCharCode(Number(ageArr[i]) + 97);
    }
    return answer;
}