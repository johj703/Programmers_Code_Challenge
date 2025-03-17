function solution(num_str) {
    return [...num_str]     // 문자열을 개별 문자 배열로 변환
        .reduce((acc, cur) =>   // reduce 메서드로 배열의 모든 요소를 순회하며 누적 계산
                acc+Number(cur),   // 현재 문자를 숫자로 변환하여 누적값에 더하기
                0);    // 초기 누적값은 0으로 설정
}