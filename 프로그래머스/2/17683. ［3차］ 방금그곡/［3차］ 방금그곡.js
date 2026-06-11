function solution(m, musicinfos) {
    // # 붙은 음을 소문자로 치환(1글자로 통일!)
    const normalize = (str) =>
        str
            .replace(/C#/g, 'c')
            .replace(/D#/g, 'd')
            .replace(/F#/g, 'f')
            .replace(/G#/g, 'g')
            .replace(/A#/g, 'a');

    const normalizedM = normalize(m);

    let result = '(None)';
    let maxTime = 0;

    for (const info of musicinfos) {
        const [start, end, title, melody] = info.split(',');

        // 재생 시간 계산 (분 단위)
        const [startH, startMin] = start.split(':').map(Number);
        const [endH, endMin] = end.split(':').map(Number);
        const playTime = endH * 60 + endMin - (startH * 60 + startMin);

        // 악보 정규화
        const normalizedMelody = normalize(melody);

        // 재생 시간만큼 악보 생성
        const repeated = normalizedMelody
            .repeat(Math.ceil(playTime / normalizedMelody.length))
            .slice(0, playTime);

        // 기억한 멜로디가 재상된 악보에 포함되는지 확인
        if (repeated.includes(normalizedM)) {
            if (playTime > maxTime) {
                maxTime = playTime;
                result = title;
            }
        }
    }
    return result;
}