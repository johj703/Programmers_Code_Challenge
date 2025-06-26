function solution(bin1, bin2) {
    // parseInt(문자열, 진법)로 이진수 문자열을 10진수로 변환한 후 덧셈 수행
    // 결과를 tostring(2)로 다시 이진수 문자열로 변환하여 반환
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}