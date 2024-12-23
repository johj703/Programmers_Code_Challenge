function solution(N, road, K) {
    const arr = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
    const lines = Array.from(Array(N + 1), () => []);
    
    road.forEach((value) => {
        // 연결되어 있는 경로를 모두 lines 배열에 저장한다.
        let [a, b ,c] = value;
        lines[a].push({ to: b, cost: c });
        lines[b].push({ to: a, cost: c });
    });
    
    let queue = [{ to: 1, cost: 0 }];
    arr[1] = 0;
    
    while(queue.length) {
        let { to } = queue.pop();
        
        lines[to].forEach((next) => {
            // 모든 경로를 탐색
            if(arr[next.to] > arr[to] + next.cost) {
                // 기존 경로의 값보다 우회하는 값이 더 작으면 해당 값을 저장한다.
                arr[next.to] = arr[to] + next.cost;
                queue.push(next);
            }
        });
    }
    // 경로의 제한인 K보다 cost가 작은 경로의 수를 반환한다.
    return arr.filter((item) => item <= K).length;
}