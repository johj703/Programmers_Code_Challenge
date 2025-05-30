function solution(quiz) {
    // 결과를 저장할 배열을 초기화
    let ans = [];
    // quiz 배열의 각 수식을 순회
    quiz.forEach((item) => {
        // 수식 문자열을 공백을 기준으로 분리
        // ex: "3 + 4 = 7" => ["3","+","4","=","7"]
        const oneQuiz = item.split(" ");
        
        // 첫 번째 숫자(X)를 추출
        const X = Number(oneQuiz[0]);
        // 세 번째 숫자(Y)를 추출
        const Y = Number(oneQuiz[2]);
        
        // 계산 결과를 저장할 변수를 초기화
        let calc = 0;
        
        // 연산자가 덧셈인 경우
        if(oneQuiz[1] === "+"){
            calc = X + Y;
        }
        
        // 연산자가 뺄셈인 경우
        if(oneQuiz[1] === "-"){
            calc = X - Y;   
        }
        
        // 수식의 결과값(Z)을 추출
        const result = Number(oneQuiz[4]);
        
        // 계산 결과와 주어진 결과값이 같으면 "O"를 추가
        if(calc === result){
            ans.push("O");
        }
        
        // 계산 결과와 주어진 결과값이 다르면 "X"를 추가
        if(calc !== result){
            ans.push("X");
        }
    })
    return ans;
}