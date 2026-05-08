function solution(video_len, pos, op_start, op_end, commands) {
    // "mm:ss" 형식을 초로 변환
    function timeToSeconds(time) {
        const [mm, ss] = time.split(':').map(Number);
        return mm * 60 + ss;
    }

    // 초를 "mm:ss" 형식으로 변환
    function secondsToTime(seconds) {
        const mm = Math.floor(seconds / 60);
        const ss = seconds % 60;
        return `${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
    }

    // 오프닝 건너뛰기 (오프닝 구간이면 op_end로 이동)
    function skipOpening(current, opStart, opEnd) {
        if (current >= opStart && current <= opEnd) {
            return opEnd;
        }
        return current;
    }

    // 모든 시각을 초로 변환
    const videoLen = timeToSeconds(video_len);
    let current = timeToSeconds(pos);
    const opStart = timeToSeconds(op_start);
    const opEnd = timeToSeconds(op_end);

    // 초기 위치에서 오프닝 체크
    current = skipOpening(current, opStart, opEnd);

    // 각 명령 처리
    for (const command of commands) {
        if (command === 'prev') {
            // 10초 전으로 (최소 0초)
            current = Math.max(0, current - 10);
        } else if (command === 'next') {
            // 10초 후로 (최대 video_len초)
            current = Math.min(videoLen, current + 10);
        }

        // 명령 실행 후 오프닝 체크
        current = skipOpening(current, opStart, opEnd);
    }

    // 초를 "mm:ss" 형식으로 변환하여 반환
    return secondsToTime(current);
}