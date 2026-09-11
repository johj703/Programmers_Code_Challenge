function solution(matrix_sizes) {
    const n = matrix_sizes.length;

    /* 
      행렬 크기 정보를 하나의 배열 p로 압축한다.
      p[0] = 첫 행렬의 행 크기, p[i] = i번째 행렬의 열 크기(=i+1번째 행렬의 행 크기)
      즉 i번째(0-indexed) 행렬의 크기는 (p[i] x p[i+1])이 된다.
    */

    const p = [matrix_sizes[0][0]];
    for (const [, col] of matrix_sizes) {
        p.push(col);
    }

    // dp[i][j]: i번째부터 j번째 행렬까지(0-indexed)를 곱해서 합치는 데 드는 최소 곱셈 횟수
    const dp = Array.from({ length: n }, () => new Array(n).fill(0));

    // 구간 길이(len)를 2부터 n까지 늘려가며 채운다 (len=1은 행렬 하나뿐이므로 비용 0, 이미 초기값과 동일)
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i + len - 1 < n; i++) {
            const j = i + len - 1;
            dp[i][j] = Infinity;

            // 구간 [i, j]를 k와 k+1 사이에서 나누는 모든 경우를 시도
            for (let k = i; k < j; k++) {
                const cost =
                    dp[i][k] + dp[k + 1][j] + p[i] * p[k + 1] * p[j + 1];
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                }
            }
        }
    }

    return dp[0][n - 1];
}