function solution(people, limit) {
    // 몸무게 순으로 정렬(오름차순)
    people.sort((a, b) => a - b);

    let left = 0; // 가장 가벼운 사람
    let right = people.length - 1; // 가장 무거운 사람
    let boats = 0;

    while (left <= right) {
        // 가장 가벼운 사람 + 가장 무거운 사람
        if (people[left] + people[right] <= limit) {
            // 둘 다 태울 수 있음
            left++;
            right--;
        } else {
            // 무거운 사람만 태움
            right--;
        }
        boats++; // 보트 1개 사용
    }
    return boats;
}