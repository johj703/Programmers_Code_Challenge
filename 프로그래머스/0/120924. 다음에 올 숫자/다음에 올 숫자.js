function solution(common) {
    // 등차수열인지 확인: 연속된 두 항의 차이가 같은지 비교
    // (두 번째 - 첫 번째) === (세 번째 - 두 번째)
    if((common[1] - common[0]) == (common[2] - common[1])){
        // 등차수열: 마지막 원소 + 공차
        // 공차 = common[1] - common[0]
        return common.pop() + common[1] - common[0];
    } else {
        // 등비수열: 마지막 원소 x 공비
        // 공비 = common[1] / common[0]
        return common.pop() * common[1] / common[0];
    }
}