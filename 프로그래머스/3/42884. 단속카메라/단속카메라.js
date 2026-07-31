function solution(routes) {
    // ----- 진출 지점(끝점) 기준 오름차순 정렬 -----
    const sortedRoutes = [...routes].sort((a, b) => a[1] - b[1]);

    let cameraCount = 0;
    let lastCameraPos = -Infinity; // "마지막으로 설치한 카메라의 위치"

    for (const [enter, exit] of sortedRoutes) {
        // ----- 현재 차량의 구간(enter-exit) 안에 이미 카메라가 있으면 커버됨 -----
        if (lastCameraPos >= enter) continue;

        // ----- 커버가 안 되면 이 차량의 "진출 지점"에 새 카메라 설치 -----
        cameraCount++;
        lastCameraPos = exit;
    }

    return cameraCount;
}