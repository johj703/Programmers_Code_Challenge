function solution(plans) {
    // 시간을 분으로 변환
    const toMinutes = (time) => {
        const [h, m] = time.split(':').map(Number);
        return h * 60 + m;
    };

    // 시작 시각 순으로 정렬
    const sorted = plans
        .map(([name, start, playtime]) => ({
            name,
            start: toMinutes(start),
            playtime: Number(playtime),
        }))
        .sort((a, b) => a.start - b.start);

    const result = [];
    const stack = []; // 멈춘 과제들 ({name, remaining})
    let current = null; // 현재 진행 중인 과제
    let lastTime = 0;

    for (const plan of sorted) {
        let gap = plan.start - lastTime; // 경과 시간

        // 현재 과제 처리
        if (current) {
            if (current.remaining <= gap) {
                // 현재 과제 끝낼 수 있음
                gap -= current.remaining;
                result.push(current.name);
                current = null;
            } else {
                // 못 끝내면 시간만 줄이고 멈춤
                current.remaining -= gap;
                gap = 0;
            }
        }

        // gap이 남아있으면 스택에서 꺼내 처리
        while (gap > 0 && stack.length > 0) {
            const top = stack[stack.length - 1];
            if (top.remaining <= gap) {
                gap -= top.remaining;
                result.push(top.name);
                stack.pop();
            } else {
                top.remaining -= gap;
                gap = 0;
            }
        }

        // 현재 과제가 끝났으면 멈춘 과제 다시 스택에 push
        if (current) {
            stack.push(current);
        }

        // 새 과제 시작
        current = { name: plan.name, remaining: plan.playtime };
        lastTime = plan.start;
    }

    // 마지막 과제 처리
    if (current) result.push(current.name);

    // 스택에 남은 과제들 처리 (가장 최근에 멈춘 것부터)
    while (stack.length > 0) {
        result.push(stack.pop().name);
    }
    return result;
}