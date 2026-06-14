function solution(expression) {
    // 1. 수식을 숫자와 연산자로 분리
    const tokens = expression.split(/([+\-*])/).map((t) => {
        const num = Number(t);
        return isNaN(num) ? t : num; // 숫자면 Number, 연산자면 문자열
    });

    // 2. 사용자 연사나자 파악 (중복 제거)
    const ops = [...new Set(tokens.filter((t) => typeof t === 'string'))];

    // 3. 연산자 순열 생성
    const permutations = [];
    const getPermutations = (arr, current = []) => {
        if (arr.length === 0) {
            permutations.push(current);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
            getPermutations(rest, [...current, arr[i]]);
        }
    };
    getPermutations(ops);

    // 4. 연산 함수
    const operate = (a, op, b) => {
        if (op === '+') return a + b;
        if (op === '-') return a - b;
        if (op === '*') return a * b;
    };

    // 5. 우선순위 순서대로 계산
    const calculate = (tokens, priority) => {
        let arr = [...tokens];

        for (const op of priority) {
            // 해당 연산자를 모두 계산
            while (arr.includes(op)) {
                const idx = arr.indexOf(op);
                const result = operate(arr[idx - 1], op, arr[idx + 1]);
                arr.splice(idx - 1, 3, result); // 3개를 결과값 하나로 교체
            }
        }
        return arr[0];
    };

    // 6. 최대 절댓값 반환
    let maxVal = 0;
    for (const perm of permutations) {
        const result = calculate([...tokens], perm);
        maxVal = Math.max(maxVal, Math.abs(result));
    }

    return maxVal;
}