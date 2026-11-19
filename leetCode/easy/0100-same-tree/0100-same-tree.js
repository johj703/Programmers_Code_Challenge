/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    /*
     * 두 노드가 모두 비어 있으면 현재 위치까지는 동일하므로 true를 반환한다.
     */
    if (p === null && q === null) {
        return true;
    }

    /*
     * 한쪽만 비어 있거나 양쪽 노드의 값이 다르면 동일하지 않으므로 false를 반환한다.
     */
    if (p === null || q === null || p.val !== q.val) {
        return false;
    }

    /*
     * 왼쪽 자식과 오른쪽 자식이 모두 동일할 때만 두 트리를 같다고 판정한다.
     */
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};