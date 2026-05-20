function solution(phone_book) {
    // 사전순 정렬(접두어 관계에 있는 번호들이 인접하게 배치됨)
    phone_book.sort();

    // 인접한 번호끼리만 비교
    for (let i = 0; i < phone_book.length - 1; i++) {
        // 다음 번호가 현재 변호로 시작하는지 확인
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false; // 접두어 관계 발견
        }
    }
    // 접두어 관계 없음
    return true;
}