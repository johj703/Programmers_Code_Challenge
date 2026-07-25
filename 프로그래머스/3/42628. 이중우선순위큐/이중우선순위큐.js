function solution(operations) {
    // ----- 최소 힙 -----
    class MinHeap {
        constructor() {
            this.heap = [];
        }
        push(value) {
            this.heap.push(value);
            let idx = this.heap.length - 1;
            while (idx > 0) {
                const parentIdx = (idx - 1) >> 1;
                if (this.heap[parentIdx] <= this.heap[idx]) break;
                [this.heap[parentIdx], this.heap[idx]] = [
                    this.heap[idx],
                    this.heap[parentIdx],
                ];
                idx = parentIdx;
            }
        }
        pop() {
            const top = this.heap[0];
            const last = this.heap.pop();
            if (this.heap.length > 0) {
                this.heap[0] = last;
                let idx = 0;
                while (true) {
                    const left = idx * 2 + 1,
                        right = idx * 2 + 2;
                    let smallest = idx;
                    if (
                        left < this.heap.length &&
                        this.heap[left] < this.heap[smallest]
                    )
                        smallest = left;
                    if (
                        right < this.heap.length &&
                        this.heap[right] < this.heap[smallest]
                    )
                        smallest = right;
                    if (smallest === idx) break;
                    [this.heap[smallest], this.heap[idx]] = [
                        this.heap[idx],
                        this.heap[smallest],
                    ];
                    idx = smallest;
                }
            }
            return top;
        }
        peek() {
            return this.heap[0];
        }
        get size() {
            return this.heap.length;
        }
    }

    // ----- 최대 힙 -----
    class MaxHeap {
        constructor() {
            this.heap = [];
        }
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
        pop() {
            const top = this.heap[0];
            const last = this.heap.pop();
            if (this.heap.length > 0) {
                this.heap[0] = last;
                let idx = 0;
                while (true) {
                    const left = idx * 2 + 1,
                        right = idx * 2 + 2;
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
        peek() {
            return this.heap[0];
        }
        get size() {
            return this.heap.length;
        }
    }

    const minHeap = new MinHeap();
    const maxHeap = new MaxHeap();
    const removedByMax = new Map(); // maxHeap에서 삭제됨 → minHeap이 걸러내야 할 값
    const removedByMin = new Map(); // minHeap에서 삭제됨 → maxHeap이 걸러내야 할 값
    let validSize = 0; // 실제로 큐에 남아있는(삭제 안 된) 원소 개수

    // ----- 힙 꼭대기가 "이미 삭제 표시된 값"이면 실제로 pop해서 걷어내는 함수 -----
    const cleanTop = (heap, staleMap) => {
        while (heap.size > 0 && staleMap.get(heap.peek()) > 0) {
            const val = heap.pop();
            staleMap.set(val, staleMap.get(val) - 1);
        }
    };

    for (const op of operations) {
        const [command, valueStr] = op.split(' ');
        const value = Number(valueStr);

        if (command === 'I') {
            // ----- 삽입: 두 힙에 모두 넣음 -----
            minHeap.push(value);
            maxHeap.push(value);
            validSize++;
        } else {
            // ----- 삭제: 큐가 비어있으면 무시 -----
            if (validSize === 0) continue;

            if (valueStr === '1') {
                // "D 1": 최대값 삭제 -> 최대 힙에서 실제로 꺼내고, 최소 힙 쪽엔 삭제 표시만
                cleanTop(maxHeap, removedByMin);
                const removed = maxHeap.pop();
                removedByMax.set(removed, (removedByMax.get(removed) || 0) + 1);
            } else {
                // "D -1": 최소값 삭제 -> 최소 힙에서 실제로 꺼내고, 최대 힙 쪽엔 삭제 표시만
                cleanTop(minHeap, removedByMax);
                const removed = minHeap.pop();
                removedByMin.set(removed, (removedByMin.get(removed) || 0) + 1);
            }
            validSize--;
        }
    }

    // ----- 모든 연산 처리 후 결과 반환 -----
    if (validSize === 0) return [0, 0];
    cleanTop(maxHeap, removedByMin);
    cleanTop(minHeap, removedByMax);

    return [maxHeap.peek(), minHeap.peek()];
}