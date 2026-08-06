function solution(user_id, banned_id) {
    const userCount = user_id.length;
    const bannedCount = banned_id.length;

    // ----- 패턴 하나가 특정 사용자 아이디와 매칭되는지 확인 -----
    const isMatch = (pattern, id) => {
        if (pattern.length !== id.length) return false;
        for (let i = 0; i < pattern.length; i++) {
            if (pattern[i] !== '*' && pattern[i] !== id[i]) return false;
        }
        return true;
    };

    const used = new Array(userCount).fill(false); // user_id 사용 여부
    const resultSet = new Set(); // 중복 제거를 위한 Set

    // ----- 백트래킹: bannedIndex번째 패턴에 매칭될 사용자를 결정 -----
    const backtrack = (bannedIndex, chosen) => {
        if (bannedIndex === bannedCount) {
            // "선택된 조합"을 정렬 후 문자열로 만들어 중복 제거용 키로 사용
            const key = [...chosen].sort().join(',');
            resultSet.add(key);
            return;
        }

        for (let i = 0; i < userCount; i++) {
            if (!used[i] && isMatch(banned_id[bannedIndex], user_id[i])) {
                used[i] = true; // 사용 표시
                chosen.push(user_id[i]); // 선택된 사용자 추가

                backtrack(bannedIndex + 1, chosen); // 다음 패턴으로 진행

                chosen.pop();
                used[i] = false;
            }
        }
    };

    backtrack(0, []); // 초기 호출

    return resultSet.size; // 중복 제거된 조합의 개수 반환
}