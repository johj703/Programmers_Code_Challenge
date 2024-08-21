function solution(absolutes, signs) {
    var answer = 0;
    for(var i in signs){
        if(signs[i] === true){
            answer += absolutes[i];
        }else{
            answer -= absolutes[i];
        }
    }
    return answer;
}