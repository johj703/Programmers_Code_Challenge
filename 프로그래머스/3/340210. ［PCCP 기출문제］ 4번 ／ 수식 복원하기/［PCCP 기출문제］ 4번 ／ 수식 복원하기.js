function solution(expressions) {
    const answer = [];
    const validBases = findValidBases(expressions);

    for (let exp of expressions) {
        const [A, op, B, _, C] = exp.split(' ');

        if (C !== 'X') {
            continue;
        }

        const resultSet = new Set();

        for (let base of validBases) {
            const numA = parseInt(A, base);
            const numB = parseInt(B, base);
            let calResult = 0;

            if (op === '+') calResult = numA + numB;
            else if (op === '-') calResult = numA - numB;

            resultSet.add(calResult.toString(base));
        }

        if (resultSet.size === 1) {
            const [finalC] = [...resultSet];
            answer.push(`${A} ${op} ${B} = ${finalC}`);
        } else {
            answer.push(`${A} ${op} ${B} = ?`);
        }
    }
    return answer;
}
/* 헬퍼 함수1 - 유효한 진법 후보 목록(2-9)을 필터링하는 함수 */
function findValidBases(expressions) {
    const validBases = [];

    for (let base = 2; base <= 9; base++) {
        let isPossibleBase = true;

        for (let exp of expressions) {
            const [A, op, B, _, C] = exp.split(' ');

            if (!isDigitValid(A, base) || !isDigitValid(B, base)) {
                isPossibleBase = false;
                break;
            }

            if (C !== 'X') {
                if (
                    !isDigitValid(C, base) ||
                    !checkExpression(A, op, B, C, base)
                ) {
                    isPossibleBase = false;
                    break;
                }
            }
        }
        if (isPossibleBase) {
            validBases.push(base);
        }
    }
    return validBases;
}

/* 헬퍼 함수2 - 문자열의 모든 자리수가 해당 진법에서 유효한지 낱개로 직접 체크하는 함수 */
function isDigitValid(str, base) {
    for (let char of str) {
        if (Number(char) >= base) {
            return false;
        }
    }
    return true;
}

/* 헬퍼 함수3 - 10진수로 변환한 뒤 실제로 연산 수식이 성립하는지 체크하는 함수 */
function checkExpression(A, op, B, C, base) {
    const numA = parseInt(A, base);
    const numB = parseInt(B, base);
    const numC = parseInt(C, base);

    if (op === '+') return numA + numB === numC;
    if (op === '-') return numA - numB === numC;
    return false;
}