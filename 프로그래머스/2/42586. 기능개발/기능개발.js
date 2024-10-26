function solution(progresses, speeds) {
    let answer = [];
    
    // speed 배열의 길이가 0이 될 때까지
    while(speeds.length > 0) {
        let cnt = 0;
        for(let i = 0; i < speeds.length; i++) {
            // progress와 speed 짝지어 더하기
            // 100이 넘어가면 그만 더하기
            if (progresses[i] < 100) {
                progresses[i] += speeds[i];
            }
        }
        // 제일 앞의 progress배열이 100이 넘으면 shift
        while(progresses[0] >= 100){
            progresses.shift();
            // speed도 shift
            speeds.shift();
            cnt++;
        }
        if (cnt > 0) {
            answer.push(cnt);
        }
    }
    return answer;
}