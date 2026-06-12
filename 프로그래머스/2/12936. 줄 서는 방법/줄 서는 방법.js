function solution(n, k) {
    // 1-n 배열 생성
    const people = Array.from({ length: n }, (_, i) => i + 1);
    const result = [];

    // 팩토리얼 계산 (BigInt)
    const factorial = (num) => {
        let factResult = 1n;
        for (let i = 2; i <= num; i++) {
            factResult *= BigInt(i);
        }
        return factResult;
    };

    // k를 0-indexed로 변환 (BigInt)
    let remaining = BigInt(k) - 1n;

    while (people.length > 0) {
        // 현재 자리에서 (n - 1)!개씩 그룹 나뉨
        const fact = factorial(people.length - 1);

        // 몇 번째 그룹인지 (= 현재 자리 숫자의 index)
        const index = Number(remaining / fact);

        result.push(people[index]);
        people.splice(index, 1); // 사용한 숫자 제거

        // 다음 자리를 위해 나머지 계산
        remaining = remaining % fact;
    }
    return result;
}