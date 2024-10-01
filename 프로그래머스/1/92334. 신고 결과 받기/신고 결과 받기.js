function solution(id_list, report, k) {
    // 변수 선언
    const answer = [];
    const report_list = {};
    const count_list = {};
    
    // report_list, count_list 초기화
    id_list.forEach(user_id => {
        report_list[user_id] = [];
        count_list[user_id] = 0;
    });
    
    // report_list 체크
    report.forEach(rec => {
        const [user_id, report_id] = rec.split(" ");
        if(report_list[user_id].includes(report_id) === false) {
            report_list[user_id].push(report_id);
        }
    });
    
    // count_list 업데이트
    for(const key in report_list) {
        for(const report_id of report_list[key]) {
            count_list[report_id] += 1;
        }
    }
    
    // k보다 크면 count에 업데이트
    for(const key in report_list) {
        var count = 0;
        for(const report_id of report_list[key]) {
            if(count_list[report_id] >= k) {
                count++;
            }
        }
        // answer 배열에 넣기
        answer.push(count);
    }
    
    return answer;
}