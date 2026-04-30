function solution(new_id) {
    let answer = new_id;

    // 1단계: 대문자 -> 소문자
    answer = answer.toLowerCase();

    // 2단계: 허용된 문자만 남기기(소문자, 숫자, -, _, .)
    answer = answer.replace(/[^a-z0-9-_.]/g, '');

    // 3단계: 연속된 . -> 하나의 .
    answer = answer.replace(/\.+/g, '.');

    // 4단계: 처음/끝 . 제거
    answer = answer.replace(/^\.|\.$/g, '');

    // 5단계: 빈 문자열이면 "a" 대입
    if (answer === '') {
        answer = 'a';
    }

    // 6단계: 16자 이상이면 15자로 자르고, 끝 . 제거
    if (answer.length >= 16) {
        answer = answer.slice(0, 15);
        answer = answer.replace(/\.$/, '');
    }

    // 7단계: 2자 이하면 마지막 문자 반복해서 3자로
    while (answer.length <= 2) {
        answer += answer[answer.length - 1];
    }

    return answer;
}