function solution(str_list) {
    // 배열의 모든 요소를 순회
    for(let i = 0; i < str_list.length; i++) {
        // 'l'을 만나면 그 이전까지의 요소들을 반환
        if(str_list[i] === "l") {
            return str_list.slice(0, i);
        // 'r'을 만나면 그 다음부터의 요소들을 반환
        } else if(str_list[i] === "r") {
            return str_list.slice(i + 1);
        }
    }
    // 'l'과 'r'을 못 찾으면 빈 배열을 반환
    return [];
}