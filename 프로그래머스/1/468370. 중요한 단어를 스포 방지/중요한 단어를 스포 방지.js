function solution(message, spoiler_ranges) {
    // 1. 모든 단어와 위치 파싱
    const words = [];
    let currentWord = '';
    let startIdx = -1;

    for (let i = 0; i <= message.length; i++) {
        const char = i < message.length ? message[i] : ' ';
        if (char === ' ') {
            if (currentWord) {
                words.push({
                    word: currentWord,
                    start: startIdx,
                    end: i - 1,
                });
                currentWord = '';
                startIdx = -1;
            }
        } else {
            if (startIdx === -1) startIdx = i;
            currentWord += char;
        }
    }

    // 2. 스포 구간 체크 배열(각 문자가 스포 구간인지)
    const isSpoiler = new Array(message.length).fill(false);
    for (const [start, end] of spoiler_ranges) {
        for (let i = start; i <= end; i++) {
            isSpoiler[i] = true;
        }
    }

    // 3. 비스포 영역에 등장하는 단어들 (완전히 비스포 구간에만 있는 단어)
    const nonSpoilerWords = new Set();
    for (const wordInfo of words) {
        let isSpoilerWord = false;
        for (let i = wordInfo.start; i <= wordInfo.end; i++) {
            if (isSpoiler[i]) {
                isSpoilerWord = true;
                break;
            }
        }

        if (!isSpoilerWord) {
            // 완전히 비스포 영역에 있는 단어
            nonSpoilerWords.add(wordInfo.word);
        }
    }

    // 4. 스포 구간을 순서대로 처리
    const revealedSpoilerWords = new Set(); // 이미 공개된 스포 단어
    let importantCount = 0;

    for (const [start, end] of spoiler_ranges) {
        // 이 구간에서 공개되는 단어들 찾기
        const revealedWords = [];

        for (const wordInfo of words) {
            // 단어가 스포 단어인지 확인 (일부라도 스포 구간에 포함)
            let isSpoilerWord = false;
            for (let i = wordInfo.start; i <= wordInfo.end; i++) {
                if (isSpoiler[i]) {
                    isSpoilerWord = true;
                    break;
                }
            }
            if (!isSpoilerWord) continue;

            // 단어의 일부라도 현재 구간에 포함되면 공개됨
            if (wordInfo.start <= end && wordInfo.end >= start) {
                revealedWords.push(wordInfo);
            }
        }

        // 왼쪽부터 순서대로 중요한 단어인지 판단
        revealedWords.sort((a, b) => a.start - b.start);

        for (const wordInfo of revealedWords) {
            const word = wordInfo.word;

            // 이미 이전에 공개된 스포 단어인지 확인
            if (revealedSpoilerWords.has(word)) continue;

            // 비스포 영역에 등장한 적이 있는지 확인
            if (nonSpoilerWords.has(word)) continue;

            // 중요한 단어!
            importantCount++;
            revealedSpoilerWords.add(word);
        }
    }

    return importantCount;
}