// 최소 힙 구현
class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    pop() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let index = this.size() - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;

            [this.heap[parentIndex], this.heap[index]] = [
                this.heap[index],
                this.heap[parentIndex],
            ];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        while (index * 2 + 1 < this.size()) {
            let smallerChild = index * 2 + 1;
            if (
                index * 2 + 2 < this.size() &&
                this.heap[index * 2 + 2] < this.heap[smallerChild]
            ) {
                smallerChild = index * 2 + 2;
            }

            if (this.heap[index] <= this.heap[smallerChild]) break;

            [this.heap[index], this.heap[smallerChild]] = [
                this.heap[smallerChild],
                this.heap[index],
            ];
            index = smallerChild;
        }
    }
}

function solution(scoville, K) {
    const heap = new MinHeap();

    // 모든 스코빌 지수를 힙에 추가
    for (const s of scoville) {
        heap.push(s);
    }

    let count = 0;

    // 최소값이 K 미만이고 2개 이상 남아있으면 반복
    while (heap.size() >= 2 && heap.peek() < K) {
        const first = heap.pop(); // 가장 안 매운 음식
        const second = heap.pop(); // 두 번째로 안 매운 음식

        // 섞은 음식의 스코빌 지수
        const mixed = first + second * 2;

        heap.push(mixed);
        count++;
    }

    // 모든 음식이 K 이상인지 확인
    return heap.peek() >= K ? count : -1;
}