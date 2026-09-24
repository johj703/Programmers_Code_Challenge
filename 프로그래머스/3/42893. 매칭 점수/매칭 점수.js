function solution(word, pages) {
    const targetWord = word.toLowerCase();

    /* <meta property="og:url" content="...">에서 이 페이지 자신의 URL 추출 */
    const extractUrl = (html) => {
        const match = html.match(/<meta property="og:url" content="([^"]+)"/i);
        return match[1];
    };

    /* <a href="..."> 태그들에서 외부 링크 URL 목록 추출 */
    const extractLinks = (html) => {
        const tags = html.match(/<a href="([^"]+)">/gi) || [];
        return tags.map((tag) => tag.match(/href="([^"]+)"/i)[1]);
    };

    /* 검색어와 정확히 일치하는 단어(알파벳 연속 구간)의 개수를 셈 (대소문자 무시) */
    const countBaseScore = (html) => {
        const tokens = html.match(/[a-zA-Z]+/g) || [];
        let count = 0;
        for (const token of tokens) {
            if (token.toLowerCase() === targetWord) count++;
        }
        return count;
    };

    /* 각 페이지를 파싱하면서, URL -> index 매핑도 함께 구축 */
    const urlToIndex = new Map();
    const parsedPages = pages.map((html, index) => {
        const url = extractUrl(html);
        const outgoingLinks = extractLinks(html);
        const baseScore = countBaseScore(html);
        urlToIndex.set(url, index);
        return { outgoingLinks, baseScore, linkCount: outgoingLinks.length };
    });

    /* 링크점수 집계: 각 페이지가 자신의 외부 링크마다 (기본점수 ÷ 외부 링크 수)를 도착 페이지에 더함 */
    const linkScores = new Array(pages.length).fill(0);
    for (const page of parsedPages) {
        if (page.linkCount === 0) continue; // 외부 링크가 없으면 나눌 수 없으므로 기여 없음
        const contribution = page.baseScore / page.linkCount;
        for (const linkUrl of page.outgoingLinks) {
            if (urlToIndex.has(linkUrl)) {
                linkScores[urlToIndex.get(linkUrl)] += contribution;
            }
        }
    }

    /* 매칭점수 = 기본 점수 + 링크 점수, 동점이면 더 작은 index 우선 */
    let bestIndex = 0;
    let bestScore = -Infinity;
    for (let i = 0; i < pages.length; i++) {
        const matchingScore = parsedPages[i].baseScore + linkScores[i];
        if (matchingScore > bestScore) {
            bestScore = matchingScore;
            bestIndex = i;
        }
    }
    return bestIndex;
}