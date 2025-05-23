function solution(message) {
    // 각 글자의 가로 크기가 2cm이므로
    // 전체 문자 개수에 2를 곱하여 필요한 가로길이를 계산
    const answer = message.length * 2;
    return answer;
}