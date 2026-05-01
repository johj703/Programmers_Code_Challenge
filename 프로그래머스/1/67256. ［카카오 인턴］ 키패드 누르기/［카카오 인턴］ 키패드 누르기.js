function solution(numbers, hand) {
    let answer = '';

    // 키패드 좌표 매핑 (행, 열)
    const keypad = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        '*': [3, 0],
        0: [3, 1],
        '#': [3, 2],
    };

    // 초기 위치
    let leftPos = keypad['*']; // [3, 0]
    let rightPos = keypad['#']; // [3, 2]

    // 맨해튼 거리 계산 함수
    const getDistance = (pos1, pos2) => {
        return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
    };

    for (const num of numbers) {
        const targetPos = keypad[num];

        // 왼쪽 열(1, 4, 7)
        if (num === 1 || num === 4 || num === 7) {
            answer += 'L';
            leftPos = targetPos;
        }

        // 오른쪽 열(3, 6, 9)
        else if (num === 3 || num === 6 || num === 9) {
            answer += 'R';
            rightPos = targetPos;
        }

        // 가운데 열 (2, 5, 8, 0)
        else {
            const leftDist = getDistance(leftPos, targetPos);
            const rightDist = getDistance(rightPos, targetPos);

            if (leftDist < rightDist) {
                answer += 'L';
                leftPos = targetPos;
            } else if (leftDist > rightDist) {
                answer += 'R';
                rightPos = targetPos;
            } else {
                // 거리가 같으면 hand에 따라
                if (hand === 'left') {
                    answer += 'L';
                    leftPos = targetPos;
                } else {
                    answer += 'R';
                    rightPos = targetPos;
                }
            }
        }
    }

    return answer;
}