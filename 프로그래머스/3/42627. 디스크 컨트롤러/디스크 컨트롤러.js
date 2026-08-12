function solution(jobs) {
    const n = jobs.length;
    const done = new Array(n).fill(false);

    let currentTime = 0;
    let totalTurnaround = 0;
    let completedCount = 0;

    while (completedCount < n) {
        // ----- 현재 시각에 실행 가능한(요청됨 + 미완료) 작업들 중 "소요시간이 가장 짧은" 것 찾기 -----
        let selectedIndex = -1;

        for (let i = 0; i < n; i++) {
            if (done[i]) continue;
            if (jobs[i][0] > currentTime) continue; // 아직 요청도 안 된 작업

            if (
                selectedIndex === -1 ||
                jobs[i][1] < jobs[selectedIndex][1] || // 소요시간이 더 짧거나
                jobs[i][1] ===
                    jobs[
                        selectedIndex[1] && jobs[i][0] < jobs[selectedIndex][0]
                    ] // 같으면 요청시각이 빠른 것
            ) {
                selectedIndex = i;
            }
        }

        if (selectedIndex === -1) {
            // ----- 실행 가능한 작업이 없으면, 아직 안 온 작업들 중 가장 빠른 요청 시각으로 점프 -----
            let nextArrival = Infinity;
            for (let i = 0; i < n; i++) {
                if (!done[i]) nextArrival = Math.min(nextArrival, jobs[i][0]);
            }
            currentTime = nextArrival;
            continue;
        }

        // ----- 선택된 작업 실행 -----
        const [requestTime, duration] = jobs[selectedIndex];
        currentTime += duration;
        totalTurnaround += currentTime - requestTime;

        done[selectedIndex] = true;
        completedCount++;
    }
    return Math.floor(totalTurnaround / n);
}