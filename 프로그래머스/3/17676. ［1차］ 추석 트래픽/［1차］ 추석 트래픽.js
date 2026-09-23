function solution(lines) {
    // 시간 문자열("2016-09-15 hh:mm:ss.sss")에서 자정 기준 밀리초로 변환
    const parseTimeToMs = (dateTimeString) => {
        const timePart = dateTimeString.split(' ')[1];
        const [hour, minute, secondMillisecond] = timePart.split(':');
        const [second, millisecond] = secondMillisecond.split('.');
        return (
            +hour * 3600000 + +minute * 60000 + +second * 1000 + +millisecond
        );
    };

    // 처리시간 문자열("2.0s", "0.351s" 등)에서 밀리초로 변환
    const parseDurationToMs = (durationString) => {
        const numberPart = durationString.slice(0, -1); // 끝의 's' 제거
        const [integerPart, fractionPart = ''] = numberPart.split('.');
        const paddedFraction = (fractionPart + '000').slice(0, 3); // 소수점 셋째 자리까지 0으로 채움
        return +integerPart * 1000 + +paddedFraction;
    };

    // 각 로그를 [시작 밀리초, 끝 밀리초] 닫힌 구간으로 변환
    const requests = lines.map((line) => {
        const [datePart, timePart, durationPart] = line.split(' ');
        const endMs = parseTimeToMs(`${datePart} ${timePart}`);
        const durationMs = parseDurationToMs(durationPart);
        const startMs = endMs - durationMs + 1; // 시작/끝 모두 포함이라 +1 보정
        return { startMs, endMs };
    });

    // 윈도우 시작 후보: 모든 요청의 시작 시각과 끝 시각(둘 다 필요)
    const candidates = [];
    for (const request of requests) {
        candidates.push(request.startMs);
        candidates.push(request.endMs);
    }

    let maxCount = 0;
    for (const windowStart of candidates) {
        const windowEnd = windowStart + 999; // 1000ms(1초) 길이의 닫힌 구간
        let count = 0;
        for (const request of requests) {
            if (request.startMs <= windowEnd && request.endMs >= windowStart)
                count++;
        }
        if (count > maxCount) maxCount = count;
    }
    return maxCount;
}