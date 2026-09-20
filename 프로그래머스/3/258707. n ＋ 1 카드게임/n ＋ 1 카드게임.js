class Heap {
    constructor(isHigherPriority) {
        this.arr = [];
        this.isHigherPriority = isHigherPriority; // (parent, child) => true면 parent가 그대로 우선순위 유지(swap 불필요)
    }
    push(x) {
        this.arr.push(x);
        let idx = this.arr.length - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.isHigherPriority(this.arr[parentIdx], this.arr[idx]))
                break;
            [this.arr[parentIdx], this.arr[idx]] = [
                this.arr[idx],
                this.arr[parentIdx],
            ];
            idx = parentIdx;
        }
    }
    pop() {
        if (this.arr.length === 1) return this.arr.pop();
        const top = this.arr[0];
        this.arr[0] = this.arr.pop();
        let idx = 0;
        const size = this.arr.length;
        while (true) {
            const left = 2 * idx + 1;
            const right = 2 * idx + 2;
            let best = idx;
            if (
                left < size &&
                !this.isHigherPriority(this.arr[best], this.arr[left])
            )
                best = left;
            if (
                right < size &&
                !this.isHigherPriority(this.arr[best], this.arr[right])
            )
                best = right;
            if (best === idx) break;
            [this.arr[idx], this.arr[best]] = [this.arr[best], this.arr[idx]];
            idx = best;
        }
        return top;
    }
    get size() {
        return this.arr.length;
    }
}

function solution(coin, cards) {
    const n = cards.length;
    const target = n + 1;
    const initSize = n / 3;

    // posOf[v]: 값 v가 cards 배열에서 뽑히는 index(위치)
    const posOf = new Array(n + 1);
    for (let i = 0; i < n; i++) posOf[cards[i]] = i;

    function pairValueOf(v) {
        return target - v;
    }
    function pairIndexOf(idx) {
        return posOf[pairValueOf(cards[idx])];
    }

    // gone[v]: 카드 값 v가 완전히 게임에서 제외됨(짝이 맞아 소모되었거나, 영구히 버려짐)
    const gone = new Array(n + 1).fill(false);
    // onHand[v]: 카드 값 v가 현재 손에 있는지
    const onHand = new Array(n + 1).fill(false);
    // fromInitial[v]: 처음에 무료로 받은 카드인지(동전으로 산 게 아니므로 반납 대상에서 제외)
    const fromInitial = new Array(n + 1).fill(false);

    // 짝 후보(파트너의 index)를 index가 작은 순서로 꺼내, 이미 완성된 짝을 빠르게 찾기 위한 min-heap
    const pairCandidateHeap = new Heap((a, b) => a <= b);
    // 동전으로 산 카드 중 "파트너가 가장 늦게(혹은 이미 지나서) 등장하는" 것부터 반납 대상으로 고르기 위한 max-heap
    const refundCandidateHeap = new Heap((a, b) => a >= b);

    let result = 1;
    let bankedPairs = 0; // 지금 당장 낼 수 있는(이미 완성 확인된) 짝의 재고 개수

    // 1단계: 처음 나눠 받는 카드들 처리
    for (let i = 0; i < initSize; i++) {
        const v = cards[i];
        if (gone[v]) continue; // 이미 짝으로 처리되어 지나간 값이면 건너뜀

        if (pairIndexOf(i) < initSize) {
            // 짝(파트너)도 초기 분배 범위 안에 있다면, 이미 완성된 짝 하나를 재고로 저장
            bankedPairs++;
            gone[v] = true;
            gone[pairValueOf(v)] = true;
        } else {
            // 짝이 아직 안 뽑혔다면, 일단 손에 쥐고 대기
            onHand[v] = true;
            fromInitial[v] = true;
        }
    }

    /*
        아직 짝을 못 찾고 대기 중인 초기 카드들을 "짝 후보 힙"에 등록해둔다.
        나중에 그 짝이 뽑혔을 때, 힙을 이용해 완성 여부를 빠르게 확인하기 위함이다.
    */
    for (let i = 0; i < initSize; i++) {
        const v = cards[i];
        if (onHand[v]) {
            pairCandidateHeap.push(pairIndexOf(i));
        }
    }

    /* 
        pairCandidateHeap에서 "파트너의 등장 위치가 가장 작은" 후보부터 꺼내며,
        실제로 지금 둘 다 손에 있어 완성 가능한 짝을 찾으면 그 둘을 소모하고 재고를 1 늘린다.
        이미 무효화된(반납되었거나 다른 경로로 소모된) 낡은 후보는 건너뛴다(지연 삭제).
   */
    function findNewCompletedPair() {
        while (pairCandidateHeap.size > 0) {
            const partnerIdx = pairCandidateHeap.pop();
            const partnerValue = cards[partnerIdx];
            const originalValue = cards[pairIndexOf(partnerIdx)]; // 짝의 짝 = 원래 카드로 되돌아옴

            if (gone[originalValue] || gone[partnerValue]) continue; // 낡은 후보는 무시

            if (onHand[originalValue] && onHand[partnerValue]) {
                gone[originalValue] = true;
                gone[partnerValue] = true;
                onHand[originalValue] = false;
                onHand[partnerValue] = false;
                bankedPairs++;
                return true;
            }
        }
        return false;
    }

    /*
        동전이 부족할 때(음수), refundCandidateHeap에서 "파트너가 가장 늦게 등장하는(= 지금 가장 쓸모없는)"
        동전으로 산 카드를 찾아 반납하고 동전을 1 회수한다. 그 카드의 파트너도 이제 짝을 이룰 수 없으므로
        함께 제외 처리하며, 파트너도 동전으로 산 카드였다면 동전도 함께 회수한다.
    */
    let coinLeft = coin;
    function refundOneCoin() {
        while (refundCandidateHeap.size > 0) {
            const partnerIdx = refundCandidateHeap.pop();
            const partnerValue = cards[partnerIdx];
            const originalValue = cards[pairIndexOf(partnerIdx)];

            if (onHand[originalValue] && !fromInitial[originalValue]) {
                coinLeft += 1;
                gone[originalValue] = true;
                onHand[originalValue] = false;

                if (onHand[partnerValue] && !fromInitial[partnerValue]) {
                    coinLeft += 1;
                    onHand[partnerValue] = false;
                }
                gone[partnerValue] = true;
                return;
            }
        }
    }

    // 2단계: 라운드마다 카드 2장씩 순서대로 처리
    for (let i = initSize; i < n; i += 2) {
        for (const idx of [i, i + 1]) {
            const v = cards[idx];
            const p = pairValueOf(v);

            // 짝(p)이 이미 완전히 제외된 상태라면, 이 카드도 짝을 이룰 수 없으므로 가질 필요가 없다.
            if (gone[p]) continue;

            /*
            동전 여유를 지금 당장 확인하지 않고 일단 가진다(코인 마이너스를 허용).
            "가지는 것은 절대 손해가 아니다"라는 원칙에 따라, 먼저 전부 가져둔 뒤 나중에 동전이
            부족해지면 "가장 쓸모없는 카드"부터 반납하는 방식이 매번 아껴가며 갖는 것보다
            항상 같거나 더 좋은 결과를 보장한다.
            */
            onHand[v] = true;
            fromInitial[v] = false;
            coinLeft -= 1;
            const partnerPos = posOf[p];
            pairCandidateHeap.push(partnerPos);
            refundCandidateHeap.push(partnerPos);
        }

        // 동전이 모자라면(음수), 가장 쓸모없는 카드부터 반납해 동전을 회수
        while (coinLeft < 0) {
            refundOneCoin();
        }

        // 재고로 쌓인 짝이 없다면, 새로 완성된 짝이 있는지 탐색
        if (bankedPairs === 0) {
            findNewCompletedPair();
        }

        if (bankedPairs === 0) {
            break; // 낼 수 있는 짝이 전혀 없으면 게임 종료
        }

        bankedPairs -= 1; // 짝 하나를 내고 다음 라운드로 진행
        result += 1;
    }

    return result;
}