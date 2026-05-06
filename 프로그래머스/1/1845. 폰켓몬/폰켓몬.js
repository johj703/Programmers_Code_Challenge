function solution(nums) {
    // 폰켓몬 종류 개수 (중복 제거)
    const uniqueTypes = new Set(nums).size;

    // 선택 가능한 최대 마리 수
    const maxSelect = nums.length / 2;

    // 종류 개수와 선택 가능 수 중 작은 값 반환
    return Math.min(uniqueTypes, maxSelect);
}