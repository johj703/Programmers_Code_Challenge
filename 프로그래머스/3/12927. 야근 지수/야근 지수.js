function solution(n, works) {
    // ----- 1. 최대 힙 클래스 구현 -----
    class MaxHeap {
        constructor() {
            this.heap = [];
        }

        // "부모/자식 index 계산 후 위로 올려보내며 힙 성질 유지"
        push(value) {
            this.heap.push(value);
            let idx = this.heap.length - 1;

            while (idx > 0) {
                const parentIdx = (idx - 1) >> 1;
                if (this.heap[parentIdx] >= this.heap[idx]) break;
                [this.heap[parentIdx], this.heap[idx]] = [
                    this.heap[idx],
                    this.heap[parentIdx],
                ];
                idx = parentIdx;
            }
        }

        // "루트(최댓값)를 꺼내고, 맨 끝 값을 루트로 올린 뒤 아래로 내려보내며 재정렬"
        pop() {
            const top = this.heap[0];
            const last = this.heap.pop();

            if (this.heap.length > 0) {
                this.heap[0] = last;
                let idx = 0;

                while (true) {
                    const left = idx * 2 + 1;
                    const right = idx * 2 + 2;
                    let largest = idx;

                    if (
                        left < this.heap.length &&
                        this.heap[left] > this.heap[largest]
                    )
                        largest = left;
                    if (
                        right < this.heap.length &&
                        this.heap[right] > this.heap[largest]
                    )
                        largest = right;
                    if (largest === idx) break;

                    [this.heap[largest], this.heap[idx]] = [
                        this.heap[idx],
                        this.heap[largest],
                    ];
                    idx = largest;
                }
            }

            return top;
        }

        get size() {
            return this.heap.length;
        }
    }

    // ----- 2. 작업량 총합이 n보다 작거나 같으면 모든 일을 끝낼 수 있음(피로도 0) -----
    const totalWork = works.reduce((sum, w) => sum + w, 0);
    if (totalWork <= n) return 0;

    // ----- 3. 최대 힙에 모든 작업량 삽입 -----
    const heap = new MaxHeap();
    for (const w of works) {
        if (w > 0) heap.push(w);
    }

    // ----- 4. n시간 동안 "가장 큰 작업량"을 1씩 줄임 -----
    for (let i = 0; i < n; i++) {
        if (heap.size === 0) break; // 더 이상 남은 일이 없으면 조기 종료

        const max = heap.pop();
        if (max - 1 > 0) {
            heap.push(max - 1);
        }
        // max가 1이었다면 다 처리된 것이므로 다시 넣지 않음
    }

    // ----- 5. 남은 작업량들의 제곱합 계산 -----
    let fatigue = 0;
    while (heap.size > 0) {
        const remain = heap.pop();
        fatigue += remain * remain;
    }
    return fatigue;
}