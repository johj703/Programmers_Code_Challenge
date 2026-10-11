/**
 * @param {number[][]} board - N x M 크기의 앱 배치 격자판
 * @param {number[][]} commands - 실행할 명령 목록 [[id1, dir1], [id2, dir2], ...]
 * @return {number[][]} - 모든 정리 명령이 수행된 최종 N x M 격자판
 */
function solution(board, commands) {
    const N = board.length;
    const M = board[0].length; // 정밀하게 열의 길이를 추출

    // 조각1 - 격자판 데이터 파싱 및 초기 {id, r, c, s} 객체 풀 인프라 빌드
    const appMap = new Map();
    const appCounts = new Map();

    // 행 우선 스캔으로 왼쪽 위 꼭지점 좌표 (r, c) 추출
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            const id = board[i][j];
            if (id === 0) continue;

            appCounts.set(id, (appCounts.get(id) || 0) + 1);

            if (!appMap.has(id)) {
                appMap.set(id, { id: id, r: i, c: j, s: 0 });
            }
        }
    }

    // 한 변의 길이 s = Math.sqrt(개수) 최종 확정
    for (let [id, app] of appMap.entries()) {
        app.s = Math.sqrt(appCounts.get(id));
    }

    // 원본 보드를 복사하여 실시간으로 한 줄씩 갱신할 2차원 배열 g 생성
    const g = board.map((row) => [...row]);

    // 벽을 넘은 앱 ID들을 독립된 타임라인에서 대기시킬 이동 대기실 큐
    const wrapQueue = [];

    // 조각A - 방향 4개에 따른 뒤쪽 줄 / 앞쪽 줄 / 벽 넘기 조건 공식
    function getLineInfo(app, dir) {
        let isWrapped = false;
        const coords = []; // [r, c] 좌표들의 묶음 목록

        switch (dir) {
            case 1:
                // 오른쪽 이동 (리뷰어 예시 반영)
                isWrapped = app.c + app.s === M;
                for (let i = 0; i < app.s; i++) {
                    coords.push({
                        eraseR: app.r + i,
                        eraseC: app.c,
                        fillR: app.r + i,
                        fillC: app.c + app.s,
                    });
                }
                break;

            case 2:
                // 아래쪽 이동 (행 기준 스캔)
                isWrapped = app.r + app.s === N;
                for (let j = 0; j < app.s; j++) {
                    coords.push({
                        eraseR: app.r,
                        eraseC: app.c + j,
                        fillR: app.r + app.s,
                        fillC: app.c + j,
                    });
                }
                break;

            case 3:
                // 왼쪽 이동 (열 기준 스캔)
                isWrapped = app.c === 0;
                for (let i = 0; i < app.s; i++) {
                    coords.push({
                        eraseR: app.r + i,
                        eraseC: app.c + app.s - 1,
                        fillR: app.r + i,
                        fillC: app.c - 1,
                    });
                }
                break;

            case 4:
                // 위쪽 이동 (행 기준 스캔)
                isWrapped = app.r === 0;
                for (let j = 0; j < app.s; j++) {
                    coords.push({
                        eraseR: app.r + app.s - 1,
                        eraseC: app.c + j,
                        fillR: app.r - 1,
                        fillC: app.c + j,
                    });
                }
                break;
        }
        return { isWrapped, coords };
    }

    // 조각B - 특정 앱 ID를 지정된 라인 단위로 밀어내는 push(id) 함수
    function push(id, dir) {
        const app = appMap.get(id);
        const { isWrapped, coords } = getLineInfo(app, dir);

        // 상황 1: 벽을 넘는 임계점 도달 -> 보드에서 완전 삭제 후 대기 큐로 격리
        if (isWrapped) {
            for (let i = 0; i < app.s; i++) {
                for (let j = 0; j < app.s; j++) {
                    g[app.r + i][app.c + j] = 0;
                }
            }
            wrapQueue.push(id);
            return;
        }

        // 상황 2: 벽을 넘지 않는 정상 밀기
        // 2-1 - 먼저 꼬리 부분의 뒤쪽 줄 칸들을 안전하게 0으로 지우기
        for (let coord of coords) {
            g[coord.eraseR][coord.eraseC] = 0;
        }

        // 2-2 - 앞쪽 진입 줄을 한 칸씩 훑으며, 방해되는 앱을 '먼저' 밀고 내 id를 채우기
        for (let coord of coords) {
            const otherId = g[coord.fillR][coord.fillC];

            if (otherId !== 0 && otherId !== id) {
                push(otherId, dir); // 가로막고 있는 타사 앱을 먼저 연쇄 push 밀기
            }
            g[coord.fillR][coord.fillC] = id; // 이제 내 영역으로 안전하게 덮어쓰기
        }

        // 2-3 - 최종 밀기가 끝난 후 앱 자체의 실제 꼭지점 좌표 (r, c) 마이그레이션 갱신
        if (dir === 1) app.c += 1;
        else if (dir === 2) app.r += 1;
        else if (dir === 3) app.c -= 1;
        else if (dir === 4) app.r -= 1;
    }

    // 조각C-1 - 큐에서 꺼낸 벽 넘은 앱을 반대편 가장자리부터 채워넣는 insertWrapped
    function insertWrapped(id, dir) {
        const app = appMap.get(id);

        // 1. 벽을 넘어선 반대편의 새로운 꼭지점 (r, c) 축 정밀 동기화
        if (dir === 1) app.c = 0;
        else if (dir === 3) app.c = M - app.s;
        else if (dir === 2) app.r = 0;
        else if (dir === 4) app.r = N - app.s;

        // 2. 들어오는 쪽 '바깥 가장자리 줄부터 안쪽 줄 순서'대로 훑기 위해
        // 방향별로 순차적인 삽입 라인 리스트 빌드
        const lines = [];
        if (dir === 1) {
            // 오른쪽으로 탈출 -> 0번 열, 1번 열... 순으로 삽입
            for (let offset = 0; offset < app.s; offset++)
                lines.push(0 + offset);
        } else if (dir === 3) {
            // 왼쪽으로 탈출 -> M-1 열, M-2 열... 순으로 삽입
            for (let offset = 0; offset < app.s; offset++)
                lines.push(M - 1 - offset);
        } else if (dir === 2) {
            // 아래로 탈출 -> 0번 행, 1번 행... 순으로 삽입
            for (let offset = 0; offset < app.s; offset++)
                lines.push(0 + offset);
        } else if (dir === 4) {
            // 위로 탈출 -> N-1 행, N-2 행... 순으로 삽입
            for (let offset = 0; offset < app.s; offset++)
                lines.push(N - 1 - offset);
        }

        // 3. 한 줄씩 채우면서, 그 자리에 서 있던 기존 앱이 있으면 똑같이 연쇄 push(id, dir) 처리
        for (let line of lines) {
            if (dir === 1 || dir === 3) {
                // 가로 삽입 시 -> 결정된 열(line)에 내 앱의 행 크기만큼 세로 칸 스캔
                for (let i = 0; i < app.s; i++) {
                    const currentR = app.r + i;
                    const otherId = g[currentR][line];

                    if (otherId !== 0 && otherId !== id) {
                        push(otherId, dir); // 방해자 밀어내기
                    }
                    g[currentR][line] = id; // 내 ID 삽입
                }
            } else {
                // 세로 삽입 시 -> 결정된 행(line)에 내 앱의 열 크기만큼 가로 칸 스캔
                for (let j = 0; j < app.s; j++) {
                    const currentC = app.c + j;
                    const otherId = g[line][currentC];

                    if (otherId !== 0 && otherId !== id) {
                        push(otherId, dir); // 방해자 밀어내기
                    }
                    g[line][currentC] = id; // 내 ID 삽입
                }
            }
        }
    }

    // 조각C-2 - 커맨드 연쇄 처리 허브 루프(while 큐 연쇄 결합)
    for (let [id, dir] of commands) {
        const mainApp = appMap.get(id);
        if (mainApp) {
            // 1. 명령의 주인공을 먼저 라인 밀기 구동 실행
            push(id, dir);

            /* 
             2. insertWrapped 중에도 새로운 앱이 벽을 넘어
             wrapQueue에 들어올 수 있으므로, 완전히 빌 때까지 while 문으로 연쇄 방출 삽입 
            */
            while (wrapQueue.length > 0) {
                const nextWrappedId = wrapQueue.shift(); // 앞에서 하나씩 순서대로 방출
                insertWrapped(nextWrappedId, dir);
            }
        }
    }

    // 실시간으로 g가 최종 보드로 동적 동기화되었으므로 g 그대로 반환
    return g;
}