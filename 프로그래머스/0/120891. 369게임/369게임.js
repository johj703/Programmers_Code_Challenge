function solution(order) {
    // 순서
    // 1. 숫자를 문잘열로 변환: String(order)
    // 2. 문자열을 개별 문자 배열로 분리: [...String(order)]
    // 3. 배열에서 "3", "6", "9"만 필터링: filter((v) => ["3", "6", "9"].includes(v))
    // 4. 필터링된 배열의 길이(3, 6, 9의 개수) 반환: .length
    return [...String(order)]   // 숫자를 문자 배열로 변환
        .filter((v) => ["3", "6", "9"].includes(v)) // 3, 6, 9만 필터링
        .length;    // 3, 6, 9의 개수 반환
}