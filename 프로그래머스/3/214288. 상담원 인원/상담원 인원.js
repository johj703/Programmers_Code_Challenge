function solution(k, n, reqs) {
    // 1. 준비 단계 - reqs를 상담 유형(c)별로 분류
    // index를 유형 번호 (1~k)와 맞추기 위해 크기가 k+1인 배열을 생성
    const typeRequests = Array.from({ length: k + 1 }, () => []);

    for (let [a, b, c] of reqs) {
        typeRequests[c].push([a, b]); // 각 유형(c) 방에 [시작 시각, 상담 시각] 주입
    }

    // 2. 전처리 단계 - 각 유형 & 멘토 수(m)별로 대시기간 합을 구해 waitCost 테이블 채우기
    // waitCost[i][m] -> i번째 유형에 m명의 멘토를 두었을 때의 대기시간 합
    const waitCost = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= k; i++) {
        // m은 최소 1명부터, 한 유형에 물아줄 수 있는 최대치인 n명까지 미리 다 계산해 두기
        for (let m = 1; m <= n; m++) {
            waitCost[i][m] = simulateTypeWaitTime(typeRequests[i], m);
        }
    }

    // 3. DP 연산 단계 - 배낭 문제 변형 점화식을 활용해 최소 대기시간 합 도출
    // dp[i][j] -> i번째 유형까지 고려했을 때, 총 j명의 멘토를 배정한 상태에서의 최소 대기시간 합
    const dp = Array.from({ length: k + 1 }, () => Array(n + 1).fill(Infinity));

    // 기저 조건: 0번째 유형까지 0명을 배정하면 누적 대기시간은 0이 됨
    dp[0][0] = 0;

    // i: 1번 유형부터 k번 유형까지
    for (let i = 1; i <= k; i++) {
        // j: 현재 i유형까지 오면서 배정한 총 멘토 수 (최소 i명)
        for (let j = i; j <= n; j++) {
            // m: 현재 i번째 유형에 새로 배정해볼 멘토의 수
            // 남은 이전 유형들이 최소 1명씩 가져가야 하므로 상한선은 j - (i - 1)이 됨
            for (let m = 1; m <= j - (i - 1); m++) {
                if (dp[i - 1][j - m] !== Infinity) {
                    dp[i][j] = Math.min(
                        dp[i][j],
                        dp[i - 1][j - m] + waitCost[i][m],
                    );
                }
            }
        }
    }

    // 최종 정답: k번째 유형까지 모두 고려하고 총 n명의 멘토를 남김없이 효율적으로 배정했을 때의 최소값
    return dp[k][n];
}

//-------------------------------------------------------------------------------------------------------------
/*
    typeRequests: 해당 상담 유형에 들어온 손님들의 요청 리스트 [[a1, b1], [a2, b2], ...]
    (여기서 a는 상담 요청 시각, b는 상담 시간이며 이미 시간순으로 정렬되어 있음)
    m: 이 상담 유형에 배정할 멘토의 수(1~n)
*/
function simulateTypeWaitTime(typeRequests, m) {
    // 흐름 1: 길이 m짜리 배열(각 멘토의 "상담 종료 예정 시간")을 준비하고 전부 0으로 초기화
    const mentors = new Array(m).fill(0); // 각 멘토의 "상담 종료 예정 시간" 배열
    let totalWaitTime = 0;

    // 흐름 2: 해당 유형의 요청들을 하나씩 순회
    for (let [a, b] of typeRequests) {
        // 흐름 3: 배열에서 "가장 빨리 끝나는(= 값이 가장 작은) 멘토"를 찾음
        let earliestEndTime = Infinity;
        let mentorIndex = -1;

        // 현재 배정된 m명의 멘토 중 가장 빨리 끝나는 멘토 찾기
        for (let i = 0; i < m; i++) {
            if (mentors[i] < earliestEndTime) {
                earliestEndTime = mentors[i];
                mentorIndex = i;
            }
        }

        // 흐름 4: 그 멘토의 종료 시간(earliestEndTime)과 요청 시각(a)을 비교해서 대기 시간을 계산하고 누적
        // 실제 상담이 시작되는 시각
        let startTime = a;

        if (earliestEndTime > a) {
            // 가장 빨리 끝나는 멘토의 대기 시간이 요청 시각보다 뒤에 있다면 대기 시간이 발생
            const wait = earliestEndTime - a;
            totalWaitTime += wait;

            // 실제 상담 시작 시각은 멘토가 마치는 시각이 됨
            startTime = earliestEndTime;
        }

        // 흐름 5: 그 멘토의 종료 시간을 "상담 시작 시각 + 상담 시간(b)"으로 갱신
        mentors[mentorIndex] = startTime + b;
    }
    // 최종 누적된 대기 시간 합산 반환
    return totalWaitTime;
}
