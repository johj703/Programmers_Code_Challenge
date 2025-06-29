function solution(A, B) {
    // A를 문자 배열로 변환
    let arr = [...A];
    // A의 길이만큼 반복(최대 회전 개수)
    for(let i = 0; i < A.length; i++){
        // 현재 배열을 문자열로 만들어서 B와 비교
        if(arr.join('') === B){
            // i번 밀어서 B가 되면 i반환
            return i;
        }
        // 문자열을 오른쪽으로 한 칸 밀기
        // 맨 뒤 문자를 제거해서 맨 앞에 추가
        arr.unshift(arr.pop());
    }
    // 모든 경우를 시도해도 B가 될 수 없으면 -1반환
    return -1;
}