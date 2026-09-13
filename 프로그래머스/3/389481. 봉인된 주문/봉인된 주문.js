function solution(n, bans) {
    // 문자열을 26진법 정수로 변환 (a=0, b=1, ..., z=25)
    function toNumber(str) {
        let num = 0;
        for (const ch of str) {
            num = num * 26 + (ch.charCodeAt(0) - 97);
        }
        return num;
    }

    // 26진법 정수를 길이 length짜리 문자열로 복원
    function toStr(num, length) {
        const arr = new Array(length);
        for (let i = length - 1; i >= 0; i--) {
            arr[i] = String.fromCharCode(97 + (num % 26));
            num = Math.floor(num / 26);
        }
        return arr.join('');
    }

    // 정렬된 배열에서 value 이하인 원소의 개수를 이분 탐색으로 계산
    function countLE(sortedArr, value) {
        let low = 0,
            high = sortedArr.length;
        while (low < high) {
            const mid = (low + high) >> 1;
            if (sortedArr[mid] <= value) low = mid + 1;
            else high = mid;
        }
        return low;
    }

    // bans를 길이별로 분류하고, 각 길이 안에서 숫자값 오름차순 정렬
    const bansByLength = Array.from({ length: 12 }, () => []);
    for (const banned of bans) {
        bansByLength[banned.length].push(toNumber(banned));
    }
    for (let len = 1; len <= 11; len++) {
        bansByLength[len].sort((a, b) => a - b);
    }

    // 1단계: n번째 주문의 길이(targetLength)와 그 길이 안에서의 순번(remaining)을 확정
    let remaining = n;
    let targetLength = -1;
    for (let len = 1; len <= 11; len++) {
        const totalCount = Math.pow(26, len);
        const validCount = totalCount - bansByLength[len].length;
        if (remaining <= validCount) {
            targetLength = len;
            break;
        }
        remaining -= validCount;
    }

    // 2단계: 길이 targetLength 안에서, remaining번째로 남아있는 숫자값을 이분 탐색으로 탐색
    const bannedSorted = bansByLength[targetLength];
    let low = 0;
    let high = Math.pow(26, targetLength) - 1;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        const bannedCountLE = countLE(bannedSorted, mid);
        const validCountLE = mid + 1 - bannedCountLE; // mid 이하에 남아있는 문자열 개수

        if (validCountLE >= remaining) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return toStr(low, targetLength);
}