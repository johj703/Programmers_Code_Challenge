function solution(name, yearning, photo) {
    // 인물 이름과 그리움 점수를 매핑하는 객체 생성
    let info = {};
    
    // name 배열과 yearning 배열을 순회하며 객체에 저장
    // ex) {"may": 5, "kein": 10, "kain": 1}
    name.forEach((person, index) => {
        info[person] = yearning[index];
    })
    
    // 각 사진의 추억 점수를 저장할 배열
    let answer = [];
    
    // 각 사진(photo 배열의 각 요소)을 순회
    for(let i = 0; i < photo.length; i++){
        // 현재 처리 중인 사진(인물 이름들의 배열)
        const image = photo[i];
        
        // 현재 사진의 추억 점수 합계
        let sum = 0;
        
        // 현재 사진 속 각 인물을 순회
        for(let j = 0; j < image.length; j++){
            // 해당 인물의 그리움 점수가 존재하면 합계에 추가
            // info[image[j]]가 undefined가 아닌 경우에만 더하기
            if(info[image[j]]){
                sum += info[image[j]];
            }
        }
        // 현재 사진의 총 추억 점수를 결과 배열에 추가
        answer.push(sum);
    }
    // 모든 사진의 추억 점수 배열 반환
    return answer;
}