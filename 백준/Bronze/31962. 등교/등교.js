// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환, 앞뒤 공백 제거, 공백으로 분리 후 숫자로 변환
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// N: 버스의 개수, X: 학교에 도착해야 하는 제한 시간
const [N, X] = input[0].split(" ").map(Number);

// ===== 가장 늦게 출발하는 버스 찾기 =====
// 지각하지 않고 탈 수 있는 버스 중 가장 늦게 출발하는 버스의 출발 시간
let maxDepartureTime = -1;

for(let i = 1; i <= N; i++){
    // S: 버스가 출발할 때까지 걸리는 시간
    // T: 버스가 정류장에서 학교까지 가는 데 걸리는 시간
    const [S, T] = input[i].split(" ").map(Number);

    // 학교 도착 시간 = 출발 시간 + 이동 시간
    const arrivalTime = S + T;

    // 지각하지 않는 경우(X분 이내에 도착)
    if(arrivalTime <= X) {
        // 가장 늦게 출발하는 버스 갱신
        // 예: S=2와 S=4 중 max는 4
        maxDepartureTime = Math.max(maxDepartureTime, S);
    }
}

// ===== 결과 출력 =====
console.log(maxDepartureTime);