// 1. 입력 파일 경로 설정(백준용과 로컬 테스트용 구분)
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// 2. 입력 파일을 읽고 앞 뒤 공백 제거
let str = require("fs").readFileSync(file).toString().trim();

// 3. 다이얼 번호별 알파벳과 걸리는 시간을 매핑
const alphabets = {
  ABC: 3, // 2번 다이얼(2초 + 1초 = 3초)
  DEF: 4, // 3번 다이얼(2초 + 2초 = 4초)
  GHI: 5, // 4번 다이얼(2초 + 3초 = 5초)
  JKL: 6, // 5번 다이얼(2초 + 4초 = 6초)
  MNO: 7, // 6번 다이얼(2초 + 5초 = 7초)
  PQRS: 8, // 7번 다이얼(2초 + 6초 = 8초)
  TUV: 9, // 8번 다이얼(2초 + 7초 = 9초)
  WXYZ: 10, // 9번 다이얼(2초 + 8초 = 10초)
};

// 4. 총 걸리는 시간을 저장할 변수 초기화
let minTime = 0;

// 5. 입력 문자열의 각 문자를 하나씩 확인
for (let i = 0; i < str.length; i++) {
  // 6. 각 다이얼 그룹을 확인하며 현재 문자가 포함되는지 검사
  for (let dic in alphabets) {
    // 7. 현재 문자가 해당 다이얼 그룹에 포함되면 시간 추가
    if (dic.includes(str[i])) {
      minTime += alphabets[dic];
      // 찾았으므로 더 이상 검색할 필요 없음
      break;
    }
  }
}

// 8. 총 걸리는 시간 출력
console.log(minTime);
