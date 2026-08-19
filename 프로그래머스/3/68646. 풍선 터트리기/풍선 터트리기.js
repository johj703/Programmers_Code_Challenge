function solution(a) {
    const n = a.length;
    const canSurvive = new Array(n).fill(false);

    // ----- 왼쪽에서 오른쪽으로: prefix-min(왼쪽 전체 중 최소값)인 위치 표시 -----
    let minFromLeft = Infinity;
    for (let i = 0; i < n; i++) {
        if (a[i] < minFromLeft) {
            minFromLeft = a[i];
            canSurvive[i] = true;
        }
    }

    // ----- 오른쪽에서 왼쪽으로: suffix-min(오른쪽 전체 중 최소값)인 위치 표시 -----
    let minFromRight = Infinity;
    for (let i = n - 1; i >= 0; i--) {
        if (a[i] < minFromRight) {
            minFromRight = a[i];
            canSurvive[i] = true;
        }
    }

    // ----- "생존 가능"으로 표시된 풍선의 개수 세기 -----
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (canSurvive[i]) count++;
    }

    return count;
}