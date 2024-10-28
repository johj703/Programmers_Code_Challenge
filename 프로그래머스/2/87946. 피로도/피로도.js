function solution(k, dungeons) {
    // 답을 저장해줄 answer변수
    let answer = 0;
    // visited를 체크해 줄 변수
    const visited = new Array(dungeons.length).fill(false);
    
    // DFS를 수행할 함수
    function DFS(hp, L) {
        // visited할 노드의 개수만큼 반복하도록 코드 작성
        for (let i = 0; i < dungeons.length; i++) {
            if(!visited[i] && dungeons[i][0] <= hp) {
                visited[i] = true;
                DFS(hp - dungeons[i][1], L + 1);
                visited[i] = false;
            }
        }
        answer = Math.max(answer, L);
    }
    DFS(k, 0)
    return answer;
}