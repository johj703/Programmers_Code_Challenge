function solution(n, t, m, timetable) {
    // ----- "HH:MM" -> 분(minute) 단위 숫자로 변환 -----
    const toMinutes = (timeStr) => {
        const [h, m] = timeStr.split(':').map(Number);
        return h * 60 + m;
    };

    // ----- 분(minute) 단위 숫자 -> "HH:MM" 문자열로 변환 -----
    const toTimeString = (minutes) => {
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
    };

    // ----- 크루들의 도착 시간을 분 단위로 변환 후 오름차순 정렬 -----
    const crews = timetable.map(toMinutes).sort((a, b) => a - b);

    let idx = 0; // "아직 셔틀에 안 탄 크루들 중 맨 앞"을 가리키는 포인터
    let answer = 0;

    // ----- 1번째 버스부터 n번째 버스까지 순서대로 시뮬레이션 -----
    for (let busIndex = 0; busIndex < n; busIndex++) {
        const busTime = 9 * 60 + t * busIndex; // 09:00부터 t분 간격

        let boardedCount = 0;
        let lastBoardedTime = -1; // 이번 버스에 탄 "마지막 사람"의 도착 시각

        // ----- 정원(m)이 찰 때까지, 버스 도착 전에 온 크루들을 순서대로 태움 -----
        while (
            idx < crews.length &&
            crews[idx] <= busTime &&
            boardedCount < m
        ) {
            lastBoardedTime = crews[idx];
            idx++;
            boardedCount++;
        }

        // ----- 마지막 버스라면, 콘이 탈 수 있는 가장 늦은 시각 계산 -----
        if (busIndex === n - 1) {
            if (boardedCount < m) {
                // "빈자리가 남았다" -> 버스 도착 시각에 딱 맞춰 가면 됨
                answer = busTime;
            } else {
                // "버스가 꽉 찼다" -> 마지막 탑승자보다 1분 먼저 가야 함
                answer = lastBoardedTime - 1;
            }
        }
    }
    return toTimeString(answer);
}