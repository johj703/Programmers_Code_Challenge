function solution(record) {
    const nickMap = new Map(); // uid -> 최종 닉네임
    const logs = []; // 결과 메시지

    // 1번째 패스: 최종 닉네임 Map 구성
    for (const r of record) {
        const [action, uid, nick] = r.split(' ');

        if (action === 'Enter' || action === 'Change') {
            nickMap.set(uid, nick); // 계속 덮어씌움 -> 최종 닉네임
        }
    }

    // 2번째 패스: Enter/Leave에 최종 닉네임 적용
    for (const r of record) {
        const [action, uid] = r.split(' ');

        if (action === 'Enter') {
            logs.push(`${nickMap.get(uid)}님이 들어왔습니다.`);
        } else if (action === 'Leave') {
            logs.push(`${nickMap.get(uid)}님이 나갔습니다.`);
        }
        // Change는 메시지 없음 -> 무시
    }
    return logs;
}