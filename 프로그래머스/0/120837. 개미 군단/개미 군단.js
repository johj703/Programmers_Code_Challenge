function solution(hp) {
    // 장군개미(공격력 5)의 수를 계산
    // hp를 5로 나눈 몫이 필요한 장군개미의 수
    const generalAnts = Math.floor(hp / 5);
    
    // 남은 체력에 대해 병정개미(공격력 3)의 수를 계산
    // hp를 5로 나눈 나머지를 3으로 나눈 몫이 필요한 병정개미의 수
    const soldierAnts = Math.floor((hp % 5) / 3);
    
    // 그래도 남은 체력에 대해 일개미(공력격 1)의 수를 계산
    // (hp를 5로 나눈 나머지)를 3으로 나눈 나머지가 필요한 일개미의 수
    const workerAnts = (hp % 5) % 3;
    
    // 세 종류의 개미 수를 합하여 전체 필요한 개미 수를 반환
    return generalAnts + soldierAnts + workerAnts;
}