function solution(my_string) {
    // 변환된 문자들을 저장할 배열을 초기화
    let arr = [];
    
    // 문자열의 각 문자를 순회
    for(let i = 0; i < my_string.length; i++){
        // 현재 문자가 대문자인지 확인
        // 문자와 그 문자의 대문자 버전이 같으면 원래 대문자다.
        if(my_string[i] === my_string[i].toUpperCase()){
            // 대문자인 경우, 소문자로 변환하여 배열에 추가
            arr.push(my_string[i].toLowerCase());
        } else {
            // 소문자인 경우, 대문자로 변환하여 배열에 추가
            arr.push(my_string[i].toUpperCase());
        }
    }
    // 배열의 모든 문자를 연결하여 하나의 문자열로 만들어 반환
    return arr.join('');
}