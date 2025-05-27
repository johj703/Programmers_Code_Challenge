function solution(num, k) {
    return [...String(num)].includes(String(k))    // num을 문자열로 변환한 후 k가 포함되어 있는지 확인
    ? [...String(num)].indexOf(String(k)) + 1    // 포함되어 있으면 해당 위치(index + 1)를 반환
    : -1;    // 포함되어 있지 않으면 -1을 반환
}