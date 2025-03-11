function solution(arr) {
    // 입력 배열의 길이를 저장
    const arrLength = arr.length;
    // 2의 거듭제곱 지수를 저장할 변수를 초기화
    let exponent = 0;
    // 배열의 길이보다 크거나 같은 가장 작은 2의 거듭제곱을 찾기
    while(Math.pow(2, exponent) < arrLength) exponent ++;
    
    // 필요한 0의 개수를 계산
    // (2의 거듭제곱 - 현재 배열 길이)
    let fillNum = Math.pow(2, exponent) - arrLength;
    
    // fillNum 개수만큼 0으로 채워진 배열을 생성
    const zArr = Array(fillNum).fill(0);
    // 원래 배열과 0이 채워진 배열을 연결
    return arr.concat(zArr);
}