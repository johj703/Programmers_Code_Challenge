function solution(n, arr1, arr2) {
    return arr1.map((num, i) => {
        return (num | arr2[i]) // 비트 연산 OR 연산: 두 지도 합치기
            .toString(2) // 10진수 -> 2진수 문자열 변환
            .padStart(n, '0') // n자리 맞춤(앞에 0 채우기)
            .split('') // 문자열 -> 문자 배열로 분리
            .map((bit) => (bit === '1' ? '#' : ' ')) // 1 -> "#", 0 -> " "
            .join(''); // 배열 -> 문자열로 합치기
    });
}