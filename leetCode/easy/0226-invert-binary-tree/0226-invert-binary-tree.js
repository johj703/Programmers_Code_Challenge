/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return null;

    // 좌우 자식 노드 교환 및 재귀 호출 (제자리 수정)
    const temporary = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temporary);

    return root;
};