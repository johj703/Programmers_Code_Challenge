function solution(id_pw, db) {
    // 입력받은 아이디와 패스워드를 구조분해할당으로 분리
    const [id, pw] = id_pw;
    // 회원 데이터베이스를 Map 객체로 변환(key: 아이디, value: 패스워드)
    // [[id1, pw1], [id2, pw2]] -> Map {id1 => pw1, id2 => pw2}
    const map = new Map(db);
    
    // 삼항연산자를 중첩해서 로그인 결과 판단
    // 1단계: 아이디가 존재하는지 확인(map.has(id))
    // 2단계: 아이디가 존재하면 패스워드 일치 여부 확인(map.get(id) === pw)
    return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}