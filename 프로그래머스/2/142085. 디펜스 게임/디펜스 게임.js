// 최대 힙 구현
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return max;
    }

    bubbleUp() {
        let index = this.size() - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) break;
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
            let largerChild = index * 2 + 1;
            if (
                index * 2 + 2 < this.size() &&
                this.heap[index * 2 + 2] > this.heap[largerChild]
            ) {
                largerChild = index * 2 + 2;
            }
            if (this.heap[index] >= this.heap[largerChild]) break;
            [this.heap[index], this.heap[largerChild]] = [
                this.heap[largerChild],
                this.heap[index],
            ];
            index = largerChild;
        }
    }
}

function solution(n, k, enemy) {
    const maxHeap = new MaxHeap();

    for (let i = 0; i < enemy.length; i++) {
        // 현재 라운드 적을 힙에 추가
        maxHeap.push(enemy[i]);
        n -= enemy[i]; // 병사 소모

        // 병사가 부족하면 무적권 사용
        if (n < 0) {
            if (k <= 0) return i; // 무적권도 없으면 게임 종료

            // 지금까지 만난 적 중 최댓값에 무적권 사용
            n += maxHeap.pop();
            k--;
        }
    }
    return enemy.length; // 모든 라운드 클리어
}