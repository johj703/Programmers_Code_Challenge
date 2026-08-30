function solution(play_time, adv_time, logs) {
    // "HH:MM:SS" -> 초 단위 정수 변환
    function toSeconds(timeStr) {
        const [h, m, s] = timeStr.split(':').map(Number);
        return h * 3600 + m * 60 + s;
    }

    // 초 단위 정수 -> "HH:MM:SS" 문자열 변환
    function toTimeString(totalSec) {
        const h = String(Math.floor(totalSec / 3600)).padStart(2, '0');
        const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0');
        const s = String(totalSec % 60).padStart(2, '0');
        return `${h}:${m}:${s}`;
    }

    const playSec = toSeconds(play_time);
    const advSec = toSeconds(adv_time);

    // diff[i]: i초 시점에 시청자 수가 얼마나 늘거나 줄어드는지
    const diff = new Int32Array(playSec + 1);

    for (const log of logs) {
        const [startStr, endStr] = log.split('-');
        const start = toSeconds(startStr);
        const end = toSeconds(endStr);
        diff[start] += 1; // 시작 시각에 시청자 +1
        diff[end] -= 1; // 종료 시각에 시청자 -1 (이 시각부터는 안 보는 상태)
    }

    // prefix sum으로 매초 시정자 수 계산
    const viewers = new Int32Array(playSec);
    viewers[0] = diff[0];
    for (let i = 1; i < playSec; i++) {
        viewers[i] = viewers[i - 1] + diff[i];
    }

    // 슬라이딩 윈도우로 길이 advSec짜리 구간 중 시청자 합이 최대인 구간 탐색
    let windowSum = 0;
    for (let i = 0; i < advSec; i++) {
        windowSum += viewers[i];
    }

    let maxSum = windowSum;
    let maxStart = 0;

    for (let i = advSec; i < playSec; i++) {
        windowSum += viewers[i] - viewers[i - advSec]; // 새 값 더하고 맨 앞 값 빼기
        const start = i - advSec + 1;
        if (windowSum > maxSum) {
            // '>'만 사용 -> 같은 값이면 더 빠른 시작 시각이 유지됨
            maxSum = windowSum;
            maxStart = start;
        }
    }
    return toTimeString(maxStart);
}