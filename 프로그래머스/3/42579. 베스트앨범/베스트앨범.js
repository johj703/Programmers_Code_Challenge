function solution(genres, plays) {
    const n = genres.length;

    // ----- 1. 장르별로 "총 재생 횟수"와 "노래 목록([번호, 재생횟수])" 수집 -----
    const genreTotalPlays = new Map(); // 장르 -> 총 재생 횟수
    const genreSongs = new Map(); // 장르 -> [[번호, 재생횟수], ...]

    for (let i = 0; i < n; i++) {
        const genre = genres[i];
        const play = plays[i];

        genreTotalPlays.set(genre, (genreTotalPlays.get(genre) || 0) + play);

        if (!genreSongs.has(genre)) {
            genreSongs.set(genre, []);
        }
        genreSongs.get(genre).push([i, play]);
    }

    // ----- 2. 장르를 "총 재생 횟수" 내림차순으로 정렬 -----
    const sortedGenres = [...genreTotalPlays.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([genre]) => genre);

    // ----- 3. 각 장르 안에서 "재생 횟수 내림차순, 동률이면 번호 오름차순" 정렬 후 최대 2곡 선택 -----
    const answer = [];

    for (const genre of sortedGenres) {
        const songs = genreSongs.get(genre);

        songs.sort((a, b) => {
            if (b[1] !== a[1]) return b[1] - a[1]; // 재생 횟수 내림차순
            return a[0] - b[0]; // 동률이면 고유 번호 오름차순
        });

        // "최대 2곡까지만" 선택
        const topSongs = songs.slice(0, 2).map(([id]) => id);
        answer.push(...topSongs);
    }
    return answer;
}