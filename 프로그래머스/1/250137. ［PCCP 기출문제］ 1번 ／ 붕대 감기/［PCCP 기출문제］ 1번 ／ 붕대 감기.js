function solution(bandage, health, attacks) {
    const [t, x, y] = bandage; // [시전 시간, 초당 회복력, 추가 회복량]
    const maxHealth = health;
    let currentHealth = maxHealth;
    let successCount = 0; // 연속 성공 카운터

    // 공격을 Map으로 변환 (시간 -> 회복량)
    const attackMap = new Map();
    for (const [time, damage] of attacks) {
        attackMap.set(time, damage);
    }

    // 마지막 공격 시간
    const lastAttackTime = attacks[attacks.length - 1][0];

    // 1초부터 마지막 공격 시간까지 시뮬레이션
    for (let time = 1; time <= lastAttackTime; time++) {
        if (attackMap.has(time)) {
            // 공격 받음
            currentHealth -= attackMap.get(time);
            successCount = 0; // 연속 성공 초기화

            // 체력이 0 이하면 사망
            if (currentHealth <= 0) {
                return -1;
            }
        } else {
            // 공격 없음 - 체력 회복
            successCount++;
            currentHealth += x; // 초당 회복량

            // t초 연속 성공 시 추가 회복
            if (successCount === t) {
                currentHealth += y;
                successCount = 0; // 연속 성공 초기화
            }

            // 최대 체력 초과 방지
            if (currentHealth > maxHealth) {
                currentHealth = maxHealth;
            }
        }
    }
    return currentHealth;
}
