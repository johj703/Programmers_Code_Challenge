function solution(brown, yellow) {
    // width + length = (brown - 4) / 2
    // width + length = yellow
    
    for(let i = 1; i <= yellow; i++) {
        if(yellow % i === 0) {
            if(i + yellow / i === (brown - 4) / 2) {
                return [yellow/i + 2, i + 2]
            }
        }
    }
    
    return answer;
}