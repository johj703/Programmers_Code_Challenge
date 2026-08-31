function solution(s) {
    return s.map(str => solveOne(str));
}

function solveOne(str) {
    const stack = [];
    let cnt = 0;

    for (const ch of str) {
        // 현재 문자가 '0'이고, 스택 맨 위 두 개가 '1', '1'이면 "110"을 완성한 것 -> 제거
        if (
            ch === '0' &&
            stack.length >= 2 &&
            stack[stack.length - 1] === '1' &&
            stack[stack.length - 2] === '1'
        ) {
            stack.pop();
            stack.pop();
            cnt++;
        } else {
            stack.push(ch);
        }
    }

    const R = stack.join('');   // 더 이상 "110"을 뺼 수 없는 최소 골격
    if (cnt === 0) return R;    // 제거된 "110"이 없으면 그대로 반환

    // R의 마지막 '0' 바로 뒤가 "110"들을 몰아넣을 최적 위치(없으면 -1+!=0, 즉 맨 앞)
    const idx = R.lastIndexOf('0');
    const insertPos = idx + 1;

    return R.slice(0, insertPos) + '110'.repeat(cnt) + R.slice(insertPos);
}