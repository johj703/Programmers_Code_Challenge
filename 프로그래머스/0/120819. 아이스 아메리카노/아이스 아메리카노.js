function solution(money) {
    // 아이스 아메리카노 한 잔의 가격
    const americano = 5500;
    
    // 살 수 있는 최대 잔 수 계산(소수점 이하는 버림)
    const glass = Math.floor(money / americano);
    // 아메리카노를 구매하고 남는 돈 계산
    const change = money % americano;
    
    // 결과를 배열에 담아서 반환
    const ans = [glass, change];
    return ans;
}