function solution(rank, attendance) {
    // 참석한 학생들의 순위만 저장할 배열을 초기화
    let answer = [];
    // 모든 학생을 순회
    for(let i = 0; i < rank.length; i++) {
        // 참석한 학생이면 순위를 배열에 추가
        if(attendance[i]) answer.push(rank[i]);
    }
    // 참석한 학생들의 순위를 오름차순으로 정렬
    answer.sort((a, b) => a - b);
    // 특정 순위의 학생 index를 찾는 내부 함수를 정의
    function Participant(idx) {
        // 주어진 순위에 해당하는 학생의 원래 index를 반환
        return rank.indexOf(answer[idx]);
    }
    // 상위 3명의 학생 index를 조합하여 결과 값을 계산
    // (1등 index * 10000) + (2등 index * 100) + (3등 index)
    return 10000 * Participant(0) + 100 * Participant(1) + Participant(2);
}