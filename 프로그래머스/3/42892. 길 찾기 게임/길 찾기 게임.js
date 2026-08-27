function solution(nodeinfo) {
    // 각 노드에 원래 번호(idx)를 부여
    const nodes = nodeinfo.map((coord, i) => ({
        idx: i + 1,
        x: coord[0],
        y: coord[1],
        left: null,
        right: null,
    }));

    // y 좌표 내림차순 정렬 (y가 같으면 x 오름차순으로 정렬해 왼쪽부터 삽입되도록 함)
    nodes.sort((a, b) => b.y - a.y || a.x - b.x);

    // 정렬된 순서대로 BST에 삽입
    function insert(root, node) {
        if (node.x < root.x) {
            if (root.left === null) root.left = node;
            else insert(root.left, node);
        } else {
            if (root.right === null) root.right = node;
            else insert(root.right, node);
        }
    }

    const root = nodes[0]; // y가 가장 큰 노드가 루트
    for (let i = 1; i < nodes.length; i++) {
        insert(root, nodes[i]);
    }

    // 전위 순회: 노드 -> 왼쪽 -> 오른쪽
    function preorder(node, result) {
        if (!node) return;
        result.push(node.idx);
        preorder(node.left, result);
        preorder(node.right, result);
    }

    // 후위 순회: 왼쪽 -> 오른쪽 -> 노드
    function postorder(node, result) {
        if (!node) return;
        postorder(node.left, result);
        postorder(node.right, result);
        result.push(node.idx);
    }

    const preResult = [];
    const postResult = [];
    preorder(root, preResult);
    postorder(root, postResult);

    return [preResult, postResult];
}