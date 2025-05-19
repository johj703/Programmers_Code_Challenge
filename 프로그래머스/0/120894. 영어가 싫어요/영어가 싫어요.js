function solution(numbers) {
    // 숫자에 해당하는 영어 단어 배열을 정의
    const strN = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    
    // 변환된 결과를 저장할 변수를 초기화
    let result = numbers;
    
    // 0부터 9까지 순회하며 영어 단어를 숫자로 변환
    for(let i = 0; i < strN.length; i++) {
        // 정규표현식을 사용해서 모든 영어 단어를 한 번에 바꾸기
        // 'g' 플래그는 전역 검색을 의미하며, 일치하는 모든 부분을 변경
        let regex = new RegExp(strN[i], 'g');
        result = result.replace(regex, i);
    }
    // 변환된 문자열을 숫자로 변환하여 반환
    return Number(result);
}