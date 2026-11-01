/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === null) return 0;
    let depth = 0;
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        // 현재 레벨의 모든 노드를 처리
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift();
            if (currentNode.left !== null) queue.push(currentNode.left);
            if (currentNode.right !== null) queue.push(currentNode.right);
        }
        depth++; // 한 레벨 내려갈 때마다 깊이 증가
    }
    return depth;
};