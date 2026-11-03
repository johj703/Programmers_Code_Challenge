/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function (cost) {
    const stairCount = cost.length;
    // 초기 시작점 0번과 1번의 비용은 0
    let twoStepsBefore = 0; // cost[i-2] 역할
    let oneStepBefore = 0; // cost[i-1] 역할

    for (let i = 2; i <= stairCount; i++) {
        const current = Math.min(
            oneStepBefore + cost[i - 1],
            twoStepsBefore + cost[i - 2],
        );
        twoStepsBefore = oneStepBefore;
        oneStepBefore = current;
    }
    return oneStepBefore;
};