function solution(begin, target, words) {
    // ----- target이 words 안에 없으면 애초에 변환 불가능 -----
    if (!words.includes(target)) return 0;

    // ----- 두 단어가 "정확히 한 글자만 다른지" 확인하는 함수 -----
    const isOneLetterDiff = (a, b) => {
        let diffCount = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) diffCount++;
            if (diffCount > 1) return false; // 조기 종료로 불필요한 비교 방지
        }
        return diffCount === 1;
    };

    const visited = new Array(words.length).fill(false);
    const queue = [[begin, 0]]; // [현재 단어, 여기까지 걸린 단계 수]

    // ----- BFS: 큐에서 하나씩 꺼내며 "한 글자 차이"인 미방문 단어들을 큐에 추가 -----
    while (queue.length > 0) {
        const [currentWord, steps] = queue.shift();

        if (currentWord === target) return steps;

        for (let i = 0; i < words.length; i++) {
            if (!visited[i] && isOneLetterDiff(currentWord, words[i])) {
                visited[i] = true;
                queue.push([words[i], steps + 1]);
            }
        }
    }

    // ----- 큐가 다 빌 때까지 target을 못 찾으면 변환 불가능 -----
    return 0;
}