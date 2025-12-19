// ===== 입력 처리 =====
// 실행 환경에 따라 입력 파일 경로 설정 (백준: /dev/stdin, 로컬: ./input.txt)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 파일을 읽고 문자열 변환 후, \r 제거 후 앞뒤 공백 제거를 한 후 줄바꿈으로 분리
const input = require("fs")
  .readFileSync(file)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

// ===== 각 직원(3명)의 근무시간 계산 =====
for (let i = 0; i < 3; i++) {
  // 한 줄에서 6개의 숫자 추출
  const times = input[i].split(" ").map(Number);

  // 출근 시간 (H M S)
  const startH = times[0];
  const startM = times[1];
  const startS = times[2];

  // 퇴근 시간 (H M S)
  const endH = times[3];
  const endM = times[4];
  const endS = times[5];

  // 출근 시간을 초로 변환
  const startTotalSeconds = startH * 3600 + startM * 60 + startS;

  // 퇴근 시간을 초로 변환
  const endTotalSeconds = endH * 3600 + endM * 60 + endS;

  // 근무 시간(초)
  const workSeconds = endTotalSeconds - startTotalSeconds;

  // 근무 시간을 시/분/초로 변환
  const workH = Math.floor(workSeconds / 3600);
  const workM = Math.floor((workSeconds % 3600) / 60);
  const workS = (workSeconds % 3600) % 60;

  console.log(workH, workM, workS);
}
