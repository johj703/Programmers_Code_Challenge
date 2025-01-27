function solution(my_string, indices) {
    return [...my_string]   // 문자열을 배열로 전환
        .map((a, i) =>      // 각 문자와 index에 대해
             indices.includes(i) ? 0 : a    // indeces에 포함된 인덱스면 0으로, 아니면 원래 문자
            )
        .filter(a => a !== 0)   // 0이 아닌 문자들만 선택
        .join("");              // 다시 문자열로 변환
}