function solution(chicken) {
    // 받을 수 있는 총 서비스 치킨의 수
    let sum = 0;
    
    // 쿠폰이 10장 이상 있는 동안 반복(서비스 치킨을 받을 수 있는 조건)
    while(chicken > 9){
        // 현재 쿠폰으로 받을 수 있는 서비스 치킨 수를 총합에 추가
        sum += Math.floor(chicken / 10);
        
        // 남은 쿠폰 = 서비스 치킨으로 받은 새 쿠폰 + 사용하지 못한 나머지 쿠폰
        // Math.floor(chicken / 10): 서비스 치킨 수 = 새로 받은 쿠폰 수
        // floor 함수 = 소수점 버림
        // chicken % 10: 10으로 나눈 나머지 = 사용하지 못한 기존 쿠폰
        chicken = Math.floor((chicken / 10) + (chicken % 10));
    }
    // 총 서비스 치킨의 수 반환
    return sum;
}