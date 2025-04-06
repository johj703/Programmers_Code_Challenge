function solution(array) {
    // 각 숫자의 등장 횟수를 저장할 Map을 생성
    const counting = new Map();
    // 배열의 각 요소를 순회하며 등장 횟수를 계산
    array.forEach(num => {
        // 이미 Map에 있는 숫자면 등장 횟수를 1 증가
        if(counting.has(num)) {
            counting.set(num, counting.get(num) + 1)
        }
        // 처음 등장한 숫자면 등장 횟수를 1로 설정
        else {
            counting.set(num, 1);
        }
    });
    // 가장 많이 등장한 횟수(최대 빈도)를 찾기
    const max = Math.max(...counting.values());
    // 최대 빈도를 가진 숫자의 개수와 그 값을 저장할 변수
    let count = 0;
    let result = 0;
    // Map을 순회하며 최대 빈도를 가진 숫자를 찾기
    for(const [key, value] of counting) {
        // 현재 숫자의 등장 횟수가 최대 빈도와 같으면
        if(max === value) {
            // 최대 빈도를 가진 숫자 개수를 증가
            count++;
            // 해당 숫자를 결과로 저장
            result = key;
        }
    }
    // 최대 빈도를 가진 숫자가 여러 개면 -1을 반환
    if(count > 1) {
        return -1;
    }
    // 최대 빈도를 가진 숫자가 하나면 그 숫자를 반환
    else {
        return result;
    }
}