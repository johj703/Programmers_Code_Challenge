function solution(commands) {
    const cellGroup = new Map(); // "r, c" -> 그 셀이 속한 그룹 개체
    const allGroups = new Set(); // 현재 존재하는 모든 그룹 객체 (값 기반 검색용)

    function key(r, c) {
        return r + ',' + c;
    }

    /*
        좌표 (r, c)가 속한 그룹 객체를 반환한다.
        아직 한 번도 접근되지 않은 셀이라면, 자기 자신만 포함하는 새 그룹을 만들어 등록한다.
        즉 그룹은 미리 50×50개를 다 만들어두지 않고, 실제로 명령어에서 언급될 때만 생성된다(지연 생성).
    */
    function getGroup(r, c) {
        const k = key(r, c);
        let group = cellGroup.get(k);
        if (!group) {
            group = { cells: new Set([k]), value: null };
            cellGroup.set(k, group);
            allGroups.add(group);
        }
        return group;
    }

    const result = [];

    for (const command of commands) {
        const parts = command.split(' ');
        const type = parts[0];

        switch (type) {
            case 'UPDATE': {
                if (parts.length === 4) {
                    // "UPDATE r c value" 형태
                    const r = Number(parts[1]);
                    const c = Number(parts[2]);
                    const value = parts[3];
                    getGroup(r, c).value = value;
                } else {
                    /*
                    "UPDATE value1 value2" 형태.
                    좌표가 아니라 값으로 대상을 찾아야 하므로, 현재 존재하는 모든 그룹(allGroups)을
                    순회하며 값이 value1과 일치하는 그룹을 전부 value2로 바꾼다.
                */
                    const value1 = parts[1];
                    const value2 = parts[2];
                    for (const group of allGroups) {
                        if (group.value === value1) {
                            group.value = value2;
                        }
                    }
                }
                break;
            }

            case 'MERGE': {
                const r1 = Number(parts[1]);
                const c1 = Number(parts[2]);
                const r2 = Number(parts[3]);
                const c2 = Number(parts[4]);

                const group1 = getGroup(r1, c1);
                const group2 = getGroup(r2, c2);

                if (group1 === group2) break; // 이미 같은 그룹이면 무시

                // 값 규칙: (r1, c1) 쪽 그룹이 값을 가지고 있으면 그 값을, 없으면 (r2, c2) 쪽 값을 사용
                const newValue =
                    group1.value !== null ? group1.value : group2.value;

                /* 
                작은 그룹을 큰 그룹에 합치는 방식(small-to-large)으로 처리해 효율을 확보한다.
                base가 최종적으로 살아남는 그룹, other가 흡수되어 사라지는 그룹이다.
            */
                let base = group1;
                let other = group2;
                if (other.cells.size > base.cells.size) {
                    base = group2;
                    other = group1;
                }

                for (const k of other.cells) {
                    base.cells.add(k);
                    cellGroup.set(k, base);
                }
                base.value = newValue;

                allGroups.delete(other);
                break;
            }

            case 'UNMERGE': {
                const r = Number(parts[1]);
                const c = Number(parts[2]);
                const group = getGroup(r, c);
                const savedValue = group.value;

                // 그룹에 속한 모든 셀의 매핑을 지워, 각 셀이 다시 "1인 그룹"으로 돌아가게 만듦
                for (const k of group.cells) {
                    cellGroup.delete(k);
                }
                allGroups.delete(group);

                // 지정된 셀 (r, c)만 새로 생성되면서 원래 그룹이 가지고 있던 값을 이어받음
                const newGroup = getGroup(r, c);
                newGroup.value = savedValue;
                break;
            }

            case 'PRINT': {
                const r = Number(parts[1]);
                const c = Number(parts[2]);
                const group = getGroup(r, c);
                result.push(group.value !== null ? group.value : 'EMPTY');
                break;
            }
        }
    }
    return result;
}