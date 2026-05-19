function solution(cacheSize, cities) {
    // 캐시 크기가 0이면 모두 cache miss
    if (cacheSize === 0) {
        return cities.length * 5;
    }

    const cache = []; // LRU 캐시 (배열로 구현)
    let time = 0;

    for (const city of cities) {
        // 대소문자 구분하지 않음
        const cityLower = city.toLowerCase();

        // 캐시에 있는지 확인
        const index = cache.indexOf(cityLower);

        if (index !== -1) {
            // cache hit (실행 시간 1)
            cache.splice(index, 1); // 기존 위치에서 제거
            cache.push(cityLower); // 맨 뒤에 추가(최근 사용)
            time += 1;
        } else {
            // cache miss (실행 시간 5)
            cache.push(cityLower);

            // 캐시 크기 초과 시 가장 오래된 항목 제거 (LRU)
            if (cache.length > cacheSize) {
                cache.shift(); // 맨 앞 데이터 삭제
            }
            time += 5;
        }
    }
    return time;
}