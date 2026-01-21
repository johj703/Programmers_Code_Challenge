// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거, 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// H: 운동장의 한 변의 길이(미터)
const H = Number(input[0]);

// W: 운동장의 다른 한 변의 길이(미터)
const W = Number(input[1]);

// ===== 가장 큰 원의 반지름 계산 =====
/*
    직사각형 안에 그릴 수 있는 가장 큰 원은
    짧은 변을 지름으로 하는 원이다.

    짧은 변 = min(H, W)
    원의 지름 = min(H, W)
    원의 반지름 = min(H, W) / 2(미터 단위)
*/

const shortSide = Math.min(H, W);
const radiusInMeters = shortSide / 2;

// 미터를 센티미터로 변환(1m = 100cm)
const radiusInCm = radiusInMeters * 100;

// ===== 결과 출력 =====
console.log(radiusInCm);