function solution(skill, skill_trees) {
    let count = 0;

    for (const tree of skill_trees) {
        // skill에 포함된 문자만 추출(순서 유지)
        const filtered = tree
            .split('')
            .filter((s) => skill.includes(s))
            .join('');

        // skill의 앞부분(prefix)과 일치하면 가능한 스킬트리
        if (skill.startsWith(filtered)) {
            count++;
        }
    }
    return count;
}