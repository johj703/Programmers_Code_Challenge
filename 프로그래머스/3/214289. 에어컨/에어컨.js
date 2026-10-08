/**
 * @param {number} temperature - 실외 온도 (-10 ~ 40)
 * @param {number} t1 - 쾌적 최저 온도 (양 끝 포함)
 * @param {number} t2 - 쾌적 최고 온도 (양 끝 포함)
 * @param {number} a - 에어컨 온도를 바꿀 때 매 분 드는 전력
 * @param {number} b - 에어컨 온도를 유지할 때 매 분 드는 전력
 * @param {number[]} onboard - 매 분 승객의 탑승 여부 (1이면 탑승, 0이면 미탑승)
 * @return {number} - 쾌적 온도를 보장하면서 소모하는 최소 전력
 */
function solution(temperature, t1, t2, a, b, onboard) {
    const n = onboard.length; // onboard 배열의 길이로 전체 시간 n분 설정
    const OFFSET = 10; // 음수 index 방지용 보정치 (-10도 -> 0번 index)
    const MAX_TEMP_IDX = 50; // 온도의 최대 범위 index (40도 + 10 = 50)

    // dp[분][온도_index] 배열 생성 및 Infinity 초기화
    const dp = Array.from({ length: n }, () =>
        Array(MAX_TEMP_IDX + 1).fill(Infinity),
    );

    // 0분의 초기 상태: 실내온도 = 실외온도(temperature), 이 때의 초기 소모 전력은 0
    const startTempIdx = temperature + OFFSET;
    dp[0][startTempIdx] = 0;

    // 루프를 마지막 n-1분까지 온전히 돌려 탑승 필터가 자동 누적되도록 작성
    for (let i = 0; i < n; i++) {
        // 탑승 조건 필터 - i분에 승객이 탑승해 있다면 양 끝(t1, t2)을 포함한 쾌적 범위를 벗어난 칸을 Infinity로 커트
        if (onboard[i] === 1) {
            for (let j = 0; j <= MAX_TEMP_IDX; j++) {
                const actualTemp = j - OFFSET;
                if (actualTemp < t1 || actualTemp > t2) {
                    dp[i][j] = Infinity;
                }
            }
        }

        // 마지막 분(n-1분)에는 다음 분으로 전이하지 않고 필터 체크만 하고 멈추기
        if (i < n - 1) {
            // 현재 분(i분)의 가능한 모든 온도 칸(j)을 검사하며 다음 분(i + 1분)으로 전이시킨다
            for (let j = 0; j <= MAX_TEMP_IDX; j++) {
                if (dp[i][j] === Infinity) continue; // 도달할 수 없는 온도는 패스

                const x = j - OFFSET; // index를 실제 온도로 복원

                // 1. 에어컨을 끈다 (비용 0)
                // 실외온도(temperature) 방향으로 움직이거나, 이미 실외온도와 같다면 유지
                let nextTemp1 = x;
                if (x < temperature) nextTemp1 = x + 1;
                else if (x > temperature) nextTemp1 = x - 1;

                const nxtIdx1 = nextTemp1 + OFFSET;
                if (nxtIdx1 >= 0 && nxtIdx1 <= MAX_TEMP_IDX) {
                    dp[i + 1][nxtIdx1] = Math.min(
                        dp[i + 1][nxtIdx1],
                        dp[i][j] + 0,
                    );
                }

                // 2. 켜고 희망온도를 현재 온도 x로 둔다 (비용 b)
                const nxtIdx2 = j; // 온도는 x도 그대로 유지
                dp[i + 1][nxtIdx2] = Math.min(dp[i + 1][nxtIdx2], dp[i][j] + b);

                // 3. 켜고 희망온도를 x - 1로 둔다 (비용 a)
                const nxtIdx3 = j - 1;
                if (nxtIdx3 >= 0 && nxtIdx3 <= MAX_TEMP_IDX) {
                    dp[i + 1][nxtIdx3] = Math.min(
                        dp[i + 1][nxtIdx3],
                        dp[i][j] + a,
                    );
                }

                // 4. 켜고 희망온도를 x + 1로 둔다 (비용 a)
                const nxtIdx4 = j + 1;
                if (nxtIdx4 >= 0 && nxtIdx4 <= MAX_TEMP_IDX) {
                    dp[i + 1][nxtIdx4] = Math.min(
                        dp[i + 1][nxtIdx4],
                        dp[i][j] + a,
                    );
                }
            }
        }
    }

    // 마지막 분(n-1분)에 최종 생존한 모든 안전 온도들 중 가장 작은 최소 전력 비용을 반환
    return Math.min(...dp[n - 1]);
}