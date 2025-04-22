function solution(emergency) {
    // 원본 배열을 복사하여 내림차순으로 정렬
    const sortedEmergency = [...emergency].sort((a, b) => b - a);
    
    // 각 환자의 진료 순서를 저장할 배열
    let rankArr = [];
    
    // 원본 배열의 각 환자에 대해 순위를 매김
    for(let i = 0; i < emergency.length; i++) {
        // 현재 환자의 응급도가 정렬된 배열에서 몇 번째 위치에 있는지 찾기
        // indexOf는 해당 값이 처음 나타나는 index를 반환
        // 이 index + 1이 환자의 진료 순서
        rankArr.push(sortedEmergency.indexOf(emergency[i]) + 1);
    }
    return rankArr;
}