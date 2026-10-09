function solution(arr, l, r) {
    const N = arr.length;
    const L = r - l + 1; // 창의 길이

    //* 조각1: 누적 배열 P, Q 세팅 (1-based 인덱스 매칭)
    const P = new Array(N + 1).fill(0); // 위치 누적 (최대 100억 스케일)
    const Q = new Array(N + 1).fill(0); // 값 누적 (최대 10^15 스케일)

    for (let i = 1; i <= N; i++) {
        const val = arr[i - 1];
        P[i] = P[i - 1] + val;
        Q[i] = Q[i - 1] + val * val;
    }

    const M = P[N]; // brr의 전체 길이 (최대 100억)

    // O(logN) 누적합 함수 S(x) 정의
    function S(x) {
        if (x <= 0) return 0;
        if (x >= M) return Q[N];

        let low = 1;
        let high = N;
        let idx = N;

        // index 범위(최대 10만) 내에서만 안전하게 비트 연산(>> 1)을 활용
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (P[mid] >= x) {
                idx = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        const passedCount = x - P[idx - 1];
        const currentBlockValue = arr[idx - 1];

        return Q[idx - 1] + passedCount * currentBlockValue;
    }

    // 특정 위치 pos가 속한 블록의 원본 값(arr[idx - 1])을 구하는 함수
    function val(pos) {
        if (pos <= 0 || pos > M) return 0;

        let low = 1;
        let high = N;
        let idx = N;

        // 경계에서 밀리지 않도록 정확히 P[mid] >= pos 조건 적용
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (P[mid] >= pos) {
                idx = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return arr[idx - 1];
    }
    // 기준값 K 계산
    const K = S(r) - S(l - 1);

    //* 조각2: 구간이 바뀌는 지점(s) 모으기 및 중복 제거 정렬
    const startLimit = 1;
    const endLimit = M - L + 1; // 창의 시작 위치 상한선

    const pointSet = new Set();
    pointSet.add(1); // 무조건 첫 시작점 주입

    for (let i = 0; i <= N; i++) {
        const sA = P[i] + 1;
        if (sA >= startLimit && sA <= endLimit) pointSet.add(sA);

        const sB = P[i] + 1 - L;
        if (sB >= startLimit && sB <= endLimit) pointSet.add(sB);
    }

    const points = Array.from(pointSet);

    // 자바스크립트 기본 정렬의 문자열 오염 함정을 커스텀 비교 함수로 방어
    points.sort((a, b) => a - b);

    // Sentinel(파수꾼) 배치로 루프 내의 길이 연산을 한 줄로 단축
    points.push(endLimit + 1);

    //* 조각3: 각 등차수열 구간 내에서 f(s) === K 조건 C 카운팅 세기
    let count = 0;

    // points 배열의 마지막 원소는 sentinel이므로 points.length - 1 전까지만 순회
    for (let k = 0; k < points.length - 1; k++) {
        const lo = points[k];
        const hi = points[k + 1] - 1;
        const intervalLen = hi - lo + 1; // 현재 변화량이 일정한 구간의 길이

        // 현재 구간의 첫 시작점에서의 부분 배열 합 f(lo) 계산
        const f = S(lo + L - 1) - S(lo - 1);

        // 현재 구간에서의 매분 변화량 d 계산
        let d = 0;
        if (lo + L <= M) {
            d = val(lo + L) - val(lo);
        }

        // 일차함수 성질을 이용한 등차수열 O(1) 초고속 카운팅 판별부
        if (d === 0) {
            // 변화량이 0인 수평선 구간: 첫 시작점 합 f가 K와 같다면 구간 전체가 정답
            if (f === K) {
                count += intervalLen;
            }
        } else {
            // 변화량이 0이 아닌 일차직선 구간: f(s) = K를 만족하는 정확한 정수 칸 t 추적
            const diff = K - f;

            // 자바스크립트의 음수 나머지 연선 예외를 고려한 정수 나누어떨어짐 검사
            if (diff % d === 0) {
                const t = diff / d;

                // t가 0 이상이고 구간 내 영역(0 <= t <= intervalLen - 1)에 안착하는지 대조
                if (t >= 0 && t < intervalLen) {
                    count += 1; // 유일한 교점 1개 추가
                }
            }
        }
    }

    // 문제 최종 사양에 맞춰 [K, C] 결과 배열 반환
    return [K, count];
}