function solution(schedules, timelogs, startday) {
    let count = 0;

    // 시각(HHMM)을 분으로 변환
    function timeToMinutes(time) {
        const hours = Math.floor(time / 100);
        const minutes = time % 100;
        return hours * 60 + minutes;
    }

    // 주어진 날짜의 요일 계산 (1=월, 2=화, ..., 7=일)
    function getDayOfWeek(dayIndex) {
        let day = startday + dayIndex;
        if (day > 7) day -= 7;
        return day;
    }

    // 각 직원별로 체크
    for (let i = 0; i < schedules.length; i++) {
        const schedule = schedules[i];
        const timelog = timelogs[i];

        // 출근 인정 시각 = 희망 시각 + 10분
        const deadlineMinutes = timeToMinutes(schedule) + 10;

        let allOnTime = true; // 모든 평일에 지각하지 않았는지

        // 7일간 체크
        for (let j = 0; j < 7; j++) {
            const dayOfWeek = getDayOfWeek(j);

            // 토요일(6), 일요일(7)은 제외
            if (dayOfWeek === 6 || dayOfWeek === 7) {
                continue;
            }

            // 실제 출근 시각을 분으로 변환
            const actualMinutes = timeToMinutes(timelog[j]);

            // 출근 인정 시각보다 늦으면 지각
            if (actualMinutes > deadlineMinutes) {
                allOnTime = false;
                break;
            }
        }

        // 모든 평일에 지각하지 않았으면 카운트
        if (allOnTime) {
            count++;
        }
    }

    return count;
}