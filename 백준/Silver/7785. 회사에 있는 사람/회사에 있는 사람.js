// ===== 입력 처리 =====
// 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 입력 파일을 읽고 앞뒤 공백 제거 후 줄바꿈으로 분리
let input = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

// ===== 데이터 처리 =====
// 현재 회사에 있는 사람들을 저장하는 객체
let object = {};

// 첫 줄(로그 개수)을 제외한 나머지 로그 처리
for (let i = 1; i < input.length; i++) {
  // 각 로그를 "이름"과 "상태(enter/leave)"로 분리
  let [name, status] = input[i].split(" ");

  // enter: 회사에 입장 -> 객체에 추가
  if (status === "enter") {
    object[name] = status;
    // leave: 회사에서 퇴장 -> 객체에서 제거
  } else if (status === "leave") {
    delete object[name];
  }
}

// ===== 결과 출력 =====
// 현재 회사에 있는 사람들의 이름을 사전순 역순으로 출력
console.log(
  Object.keys(object) // 객체의 key(이름들)를 배열로 추출
    .sort() // 사전순 정렬(오름차순)
    .reverse() // 역순으로 변경(내림차순)
    .join("\n") // 줄바꿈으로 연결
);
