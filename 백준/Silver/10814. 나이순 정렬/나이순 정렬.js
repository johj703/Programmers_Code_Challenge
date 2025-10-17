// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs").readFileSync(file).toString().trim().split("\n");

// 3. 첫 번째 줄(회원 수) 제거
// 회원 수는 실제로 사용하지 않으므로 변수에 저장하지 않음
input.shift();

// 4. 나이 기준으로 오름차순 정렬
// 나이가 같으면 Javascript의 안정 정렬로 입력 순서 유지
input.sort((a, b) => {
  // 5. 각 줄에서 나이(첫 번째 값) 추출하여 비교
  const ageA = Number(a.split(" ")[0]);
  const ageB = Number(b.split(" ")[0]);
  return ageA - ageB;
});

// 6. 정렬된 결과를 줄바꿈으로 구분하여 출력
console.log(input.join("\n"));
