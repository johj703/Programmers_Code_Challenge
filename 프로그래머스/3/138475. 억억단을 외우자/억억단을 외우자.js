function solution(e, starts) {
    // count[k]: k의 약수 개수 (= 억억단에서 k가 등장하는 횟수)
    const count = new Int32Array(e + 1);

    // i를 1부터 e까지 돌며, i의 배수(i, 2i, 3i, ...)마다 약수 개수를 +1
    for (let i = 1; i <= e; i++) {
        for (let multiple = i; multiple <= e; multiple += i) {
            count[multiple]++;
        }
    }

    // best[k]: [k, e] 구간에서 등장 횟수가 가장 많은(동점이면 가장 작은) 수
    const best = new Int32Array(e + 1);
    best[e] = e;
    for (let k = e - 1; k >= 1; k--) {
        // 동점이면 더 작은 수(k)를 우선해야 하므로, ">="일 때 새로 k로 교체
        best[k] = count[k] >= count[best[k + 1]] ? k : best[k + 1];
    }
    return starts.map((s) => best[s]);
}