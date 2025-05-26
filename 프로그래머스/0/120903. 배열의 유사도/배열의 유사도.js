function solution(s1, s2) {
    // s1의 배열을 필터링해서 s2에도 포함된 원소만 남기기
    // - filter() 메서드: 조건을 만족하는 요소들만 모아 새 배열을 생성
    // - (e) => s2.includes(e): s1의 각 원소 e가 s2에 포함되어 있는지 확인하는 조건
    // - includes() 메서드: 배열에 특정 요소가 있으면 true, 없으면 false 반환
    return s1.filter((e) => s2.includes(e))
    // 필터링된 배열의 길이(공통 원소 개수)를 반환
    // - length: 배열의 요소 개수를 나타내는 속성
        .length;
}