function solution(numlist, n) {
    return numlist.sort((a, b) => {
        // a와 n의 거리
        const distanceA = Math.abs(a - n);
        // b와 n의 거리
        const distanceB = Math.abs(b - n);
        // 거리 차이
        const distanceDiff = distanceA - distanceB;
        
        if(distanceDiff !== 0){
            // 거리가 다르면 거리 차이 반환
            return distanceDiff;
        } else {
            // 거리가 같으면 큰 수를 앞에 배치하기 위해 b - a 반환
            // b - a > 0 (양수): b가 a보다 큼 -> b가 앞에 옴
            // b - a < 0 (음수): a가 b보다 큼 -> a가 앞에 옴
            return b - a;
        }
    });
}