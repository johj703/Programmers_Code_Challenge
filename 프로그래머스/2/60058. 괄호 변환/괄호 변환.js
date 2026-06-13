function solution(p) {
    // 1. 빈 문자열이면 반환
    if (p === '') return '';

    // 올바른 괄호 문자열 체크
    const isValid = (str) => {
        let count = 0;
        for (const c of str) {
            if (c === '(') count++;
            else count--;
            if (count < 0) return false; // ) 가 많아지면 false
        }
        return count === 0;
    };

    // 괄호 뒤집기 ( -> ), ) -> (
    const reverse = (str) => {
        return str
            .split('')
            .map((c) => (c === '(' ? ')' : '('))
            .join('');
    };
    // 2. u, v 분리 (첫 반째 균형 잡힌 괄호 문자열 찾기)
    let count = 0;
    let i = 0;
    for (i = 0; i < p.length; i++) {
        if (p[i] === '(') count++;
        else count--;
        if (count === 0) {
            i++;
            break;
        } // 균형 맞으면 분리!
    }
    const u = p.slice(0, i); // 균형 잡힌 괄호 문자열
    const v = p.slice(i); // 나머지

    // 3. u가 올바른 괄호 문자열이면
    if (isValid(u)) {
        return u + solution(v);
    }
    // 4. u가 올바른 괄호 문자열이 아니면
    return '(' + solution(v) + ')' + reverse(u.slice(1, -1));
    //      ↑         ↑          ↑           ↑
    //     4-1       4-2        4-3     4-4 (앞뒤 제거 후 뒤집기)
}