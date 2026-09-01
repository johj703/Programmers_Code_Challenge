function solution(numbers) {
    return numbers.map(num => isRepresentable(num) ? 1 : 0);
}

function isRepresentable(num) {
    let binary = num.toString(2); // 숫자를 이진수 문자열로 변환

    // 포화 이진트리 크기(2^k - 1)에 맞춰 앞쪽에 0을 채움
    let size = 1;
    while (size < binary.length) {
        size = size * 2 + 1;
    }
    binary = binary.padStart(size, '0');

    return check(binary);
}

// 문자열(포화 이진트리 형태)이 유효한지 재귀적으로 검사
function check(str) {
    if (str.length === 1) return true;      // 리프 노드는 항상 유효

    const mid = Math.floor(str.length / 2);
    const left = str.slice(0, mid);
    const root = str[mid];
    const right = str.slice(mid + 1);

    if (root === '0') {
        // 더미 노드라면 자식 서브트리는 전부 0(전부 더미)이어야 함
        if (/1/.test(left) || /1/.test(right)) return false;
    }

    return check(left) && check(right);
}