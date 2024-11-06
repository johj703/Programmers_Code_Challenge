function solution(word) {
    var answer = word.length;
    const gathers = "AEIOU";
    const maxNums = [781, 156, 31, 6, 1];
    
    for(let i = 0; i < word.length; i++) {
        // 첫 번째 자리부터 탐색하며, 각 자리의 몇 번째 요소인지 탐색
        const idx = gathers.indexOf(word[i]);
        // 각 자리의 n번째 요소는 그 앞에 (n - 1) * maxNums 개의 경우의 수를 가짐
        answer += idx * maxNums[i];
    }
    
    return answer;
}