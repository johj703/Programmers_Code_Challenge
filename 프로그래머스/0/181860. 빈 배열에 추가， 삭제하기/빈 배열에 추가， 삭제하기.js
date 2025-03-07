function solution(arr, flag) {
    // 결과를 저장할 빈 배열을 초기화
    const X = [];
    // arr 배열의 각 요소와 index에 대해 처리
    arr.forEach((x, i) => {
        // flag[i]가 true인 경우
        flag[i] ?
            // x를 x*2번 X 배열에 추가
            // Array(x * 2)로 길이가 x*2인 빈 배열을 만들고
            // fill(x)로 모든 요소를 x로 채운 후
            // 스프레드 연산자(...)로 배열을 풀어서 push
            X.push(...Array(x * 2).fill(x)) :
            // flag[i]가 false인 경우
            // X 배열의 뒤에서부터 x개의 요소를 제거
            X.splice(-x);
    });
    return X;
}