function solution(a, b) {
    var answer = '';
    var dayOfWeek = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
    var sumDay =[31,29,31,30,31,30,31,31,30,31,30,31];
    var sum = 0;
    for(var i =0;i<a-1;i++){
        sum += sumDay[i];
    }
    sum += b;
    var ans = (sum % 7);
    answer = dayOfWeek[ans];
    return answer;
}